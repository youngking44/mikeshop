import Product from '../models/product.model';
import { ProductType } from '../schema/product.schema';

//* CREATE PRODUCT
export const createProduct = async (input: ProductType) => {
  try {
    return await Product.create(input);
  } catch (err) {
    throw err;
  }
};

//* GET SINGLE PRODUCT
export const getProduct = async (id: string) => {
  try {
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    throw err;
  }
};

//* GET ALL PRODUCTS
export const getAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (err) {
    throw err;
  }
};

//* UPDATE PRODUCT
export const updateProduct = async (id: string, payload: ProductType) => {
  try {
    const product = await Product.findByIdAndUpdate(id, { $set: payload }, { new: true });
    return product;
  } catch (err) {
    throw err;
  }
};

//* DELETE PRODUCT
export const deleteProduct = async (id: string) => {
  try {
    const product = await Product.findByIdAndDelete(id);
    return product;
  } catch (err) {
    throw err;
  }
};
