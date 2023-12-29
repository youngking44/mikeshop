import {
  createProductHandler,
  deleteProductHandler,
  getAllProductsHandler,
  getProductHandler,
  updateProductHandler,
} from '../controllers/product.controller';
import validateResource from '../middleware/validateResource';
import { verifyTokenAndAdmin } from '../middleware/verifyToken';
import { ProductSchema } from '../schema/product.schema';
import { Router } from 'express';
const router = Router();

router.get('/', getAllProductsHandler);
router.post('/', validateResource(ProductSchema), verifyTokenAndAdmin, createProductHandler);
router.get('/:id', getProductHandler);
router.put('/:id', validateResource(ProductSchema), verifyTokenAndAdmin, updateProductHandler);
router.delete('/:id', verifyTokenAndAdmin, deleteProductHandler);

export default router;
