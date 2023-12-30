import { Request, Response, Router, raw } from 'express';
import config from 'config';
const router = Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);

router.post('/checkout', async (req: Request, res: Response) => {
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId.toString(),
      cart: JSON.stringify(req.body.cartItems.toString()),
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
});

// Stripe webhook

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = config.get<string>('webhookSecret');

router.post('/webhook', raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err: unknown) {
    //* PLEASE NOTE: DON'T  USE PINO LOGGER CAUSE IT WILL END THE FUNCTION, JUST USE console.log()
    console.log(`Webhook error: ${err.message}`);
    res.status(400).send({ type: 'Webhook error', err });
  }

  const data = req.body.data.object;
  const eventType = req.body.type;

  if (eventType === 'checkout.session.completed') {
    stripe.customers
      .retrieve(data.customer)
      .then((customer) => {
        console.log('Customer....', customer);
        console.log('Data...', data);
      })
      .catch((err) => console.log('Error....', err.message));
  }

  res.send().end();
});

export default router;
