import { deleteUserHandler, getAllUsersHandler, getUserHandler, updateUserHandler } from '../controllers/user.controller';
import validateResource from '../middleware/validateResource';
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../middleware/verifyToken';
import { updateUserSchema } from '../schema/user.schema';
import { Router } from 'express';

const router = Router();

router.get('/', verifyTokenAndAdmin, getAllUsersHandler);
router.get('/:id', verifyTokenAndAdmin, getUserHandler);
router.put('/:id', validateResource(updateUserSchema), verifyTokenAndAuthorization, updateUserHandler);
router.delete('/:id', verifyTokenAndAuthorization, deleteUserHandler);

export default router;
