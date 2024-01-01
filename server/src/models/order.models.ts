import mongoose, { InferSchemaType, Schema } from 'mongoose';

const OrderSchema = new Schema(
  {
    userId: { type: String },
    orderId: { type: String },
    cartItems: [
      {
        title: { type: String },
        desc: { type: String },
        color: { type: String },
        category: { type: String },
        brand: { type: String },
        price: { type: Number },
        img: { type: String },
        quantity: { type: Number },
      },
    ],
    name: { type: String, default: null },
    email: { type: String, default: null },
    phoneNumber: { type: String, default: null },
    address: { type: Object, default: null },
    paymentStatus: { type: String, default: 'pending' },
  },
  { timestamps: true },
);

type Order = InferSchemaType<typeof OrderSchema>;

const OrderModel = mongoose.model<Order>('Order', OrderSchema);

export default OrderModel;
