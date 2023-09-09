import { createUserHandler, loginUserHandler } from '../controllers/auth.controllers';
import validateResource from '../middleware/validateResource';
import { createUserSchema } from '../schema/user.schema';
import router from '../utils/router.utils';
router.post('/register', validateResource(createUserSchema), createUserHandler);
router.post('/login', loginUserHandler);

export default router;
