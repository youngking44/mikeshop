// import mongoose, { InferSchemaType, Schema } from 'mongoose';

// const OrderSchema = new Schema(
//   {
//     userId: { type: String, required: true, trim: true },
//     cartItems: [{ type: String, required: true, trim: true }],
//     color: { type: Array, required: true },
//     category: { type: String, required: true, trim: true },
//     brand: { type: String, required: true, trim: true },
//     price: { type: Number, required: true, trim: true },
//     img: { type: String, required: true, trim: true },
//   },
//   { timestamps: true },
// );

// type Order = InferSchemaType<typeofOrderSchema>;

// const OrderModel = mongoose.model<Order>('Order', OrderSchema);

// export default OrderModel;
