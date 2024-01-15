import { Request, Response, Router, raw } from 'express';
const router = Router();
import Stripe from 'stripe';
const stripe = require('stripe')(process.env.STRIPE_KEY);
import { createOrder, updateOrder } from '../service/order.service';
import config from 'config';
import { v4 as uuid } from 'uuid';

export interface CartItem {
  title: string;
  desc: string;
  color: string;
  category: string;
  brand: string;
  price: number;
  img: string;
  quantity: number;
}

export interface UpdateOrder {
  name: string;
  email: string;
  address: Stripe.Address;
  phoneNumber: string;
  paymentStatus: string;
}

router.post('/checkout', async (req: Request, res: Response) => {
  const orderId = uuid();
  const orderPayload = { ...req.body, orderId };
  try {
    await createOrder(orderPayload);
    const customer = await stripe.customers.create({
      metadata: {
        userId: req.body.userId.toString(),
        orderId: orderId.toString(),
        cart: req.body.cartItems.toString(),
      },
    });

    const cartItems = req.body.cartItems;
    const line_items = cartItems.map((item: CartItem) => {
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

    const session = await stripe.checkout.sessions.create({
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
  } catch (err) {
    res.status(500).json(err);
  }
});

// Stripe webhook
const endpointSecret = config.get<string>('webhookSecret');

router.post('/webhook', raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err: any) {
    //* PLEASE NOTE: DON'T  USE PINO LOGGER CAUSE IT WILL END THE FUNCTION, JUST USE console.log()
    console.log(`Webhook error: ${err.message}`);
    res.status(400).send({ type: 'Webhook error', err });
  }

  const data = req.body.data.object;
  const eventType = req.body.type;

  if (eventType === 'payment_intent.succeeded') {
    stripe.customers
      .retrieve(data.customer)
      .then((customer: Stripe.Customer) => {
        const orderId = customer.metadata.orderId;

        const updateOrderPayload: UpdateOrder = {
          name: data.customer_details.name,
          email: data.customer_details.email,
          address: data.customer_details.address,
          phoneNumber: data.customer_details.phone,
          paymentStatus: 'paid',
        };

        updateOrder(orderId, updateOrderPayload);
      })
      .catch((err: any) => {
        console.log('Error....', err.message);
        res.status(400).send({ type: 'Webhook error', err });
      });
  }

  res.send().end();
});

export default router;
