import { Request, Response } from 'express';
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../service/product.service';
import log from '../utils/logger.utils';
import { ProductType } from '../schema/product.schema';

export const createProductHandler = async (req: Request<{}, {}, ProductType>, res: Response) => {
  try {
    const product = await createProduct(req.body);
    res.status(201).json(product);
  } catch (err: any) {
    log.error(err);
    const message = err instanceof Error ? err.message : 'Unknown error ocurred';
    res.status(500).json({ message, error: err });
  }
};

export const getProductHandler = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const product = await getProduct(id);
    res.status(200).json(product);
  } catch (err: any) {
    log.error(err);
    const message = err instanceof Error ? err.message : 'Unknown error ocurred';
    res.status(500).json({ message, error: err });
  }
};

export const getAllProductsHandler = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (err: any) {
    log.error(err);
    const message = err instanceof Error ? err.message : 'Unknown error ocurred';
    res.status(500).json({ message, error: err });
  }
};

export const updateProductHandler = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const product = await updateProduct(id, req.body);

    if (!product) {
      return res.status(404).json({ message: 'No product with such ID' });
    }

    res.status(200).json(product);
  } catch (err: any) {
    log.error(err);
    const message = err instanceof Error ? err.message : 'Unknown error ocurred';
    res.status(500).json({ message, error: err });
  }
};

export const deleteProductHandler = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const product = await deleteProduct(id);

    if (!product) {
      return res.status(404).json({ message: 'No product with such ID' });
    }

    res.sendStatus(204);
  } catch (err: any) {
    log.error(err);
    const message = err instanceof Error ? err.message : 'Unknown error ocurred';
    res.status(500).json({ message, error: err });
  }
};
