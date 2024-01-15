"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const stripe = require('stripe')(process.env.STRIPE_KEY);
const order_service_1 = require("../service/order.service");
const config_1 = __importDefault(require("config"));
const uuid_1 = require("uuid");
router.post('/checkout', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderId = (0, uuid_1.v4)();
    const orderPayload = Object.assign(Object.assign({}, req.body), { orderId });
    try {
        yield (0, order_service_1.createOrder)(orderPayload);
        const customer = yield stripe.customers.create({
            metadata: {
                userId: req.body.userId.toString(),
                orderId: orderId.toString(),
                cart: req.body.cartItems.toString(),
            },
        });
        const cartItems = req.body.cartItems;
        const line_items = cartItems.map((item) => {
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.title,
                        images: [item.img],
                        description: item.desc,
                        metadata: {
                            id: req.body.userId,
                        },
                    },
                    unit_amount: item.price * 100,
                },
                quantity: item.quantity,
            };
        });
        const session = yield stripe.checkout.sessions.create({
            billing_address_collection: 'auto',
            shipping_address_collection: {
                allowed_countries: ['US', 'CA'],
            },
            phone_number_collection: {
                enabled: true,
            },
            customer: customer.id,
            line_items,
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/checkout-success`,
            cancel_url: `${process.env.CLIENT_URL}/cart`,
        });
        res.send({ url: session.url });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// Stripe webhook
const endpointSecret = config_1.default.get('webhookSecret');
router.post('/webhook', (0, express_1.raw)({ type: 'application/json' }), (req, res) => {
    const sig = req.headers['stripe-signature'];
    try {
        const event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    }
    catch (err) {
        //* PLEASE NOTE: DON'T  USE PINO LOGGER CAUSE IT WILL END THE FUNCTION, JUST USE console.log()
        console.log(`Webhook error: ${err.message}`);
        res.status(400).send({ type: 'Webhook error', err });
    }
    const data = req.body.data.object;
    const eventType = req.body.type;
    if (eventType === 'payment_intent.succeeded') {
        stripe.customers
            .retrieve(data.customer)
            .then((customer) => {
            const orderId = customer.metadata.orderId;
            const updateOrderPayload = {
                name: data.customer_details.name,
                email: data.customer_details.email,
                address: data.customer_details.address,
                phoneNumber: data.customer_details.phone,
                paymentStatus: 'paid',
            };
            (0, order_service_1.updateOrder)(orderId, updateOrderPayload);
        })
            .catch((err) => {
            console.log('Error....', err.message);
            res.status(400).send({ type: 'Webhook error', err });
        });
    }
    res.send().end();
});
exports.default = router;
