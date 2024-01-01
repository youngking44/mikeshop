import Order from '../models/order.models';
import { CartItem, UpdateOrder } from '../routes/payment.routes';

interface InputType {
  userId: string;
  orderId: string;
  cartItems: CartItem[];
}

//* CREATE ORDER
export const createOrder = async (input: InputType) => {
  try {
    const newOrder = await Order.create(input);
    console.log('New order...', newOrder);
    return newOrder;
  } catch (err) {
    throw err;
  }
};

//* UPDATE ORDER
export const updateOrder = async (id: string, payload: UpdateOrder) => {
  try {
    const order = await Order.findOneAndUpdate({ orderId: id }, payload, { new: true });
    console.log('Updated Order...', order);
    return order;
  } catch (err) {
    throw err;
  }
};
