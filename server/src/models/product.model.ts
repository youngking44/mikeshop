import mongoose, { InferSchemaType, Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    desc: { type: String, required: true, trim: true },
    color: { type: Array, required: true },
    category: { type: String, required: true, trim: true },
    brand: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    img: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

type Product = InferSchemaType<typeof ProductSchema>;

const ProductModel = mongoose.model<Product>('Product', ProductSchema);

export default ProductModel;
