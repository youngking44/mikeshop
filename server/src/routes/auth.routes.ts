import { createUserHandler, loginUserHandler, refreshTokenHandler } from '../controllers/auth.controller';
import validateResource from '../middleware/validateResource';
import { createUserSchema, loginUserSchema } from '../schema/user.schema';
import { Router } from 'express';

const router = Router();

router.post('/register', validateResource(createUserSchema), createUserHandler);
router.post('/login', validateResource(loginUserSchema), loginUserHandler);
router.get('/refresh', refreshTokenHandler);

export default router;
