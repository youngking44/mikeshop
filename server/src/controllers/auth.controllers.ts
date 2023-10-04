import { Request, Response } from 'express';
import { IUser, createUser, loginUser } from '../service/auth.service';
import createToken from '../utils/token.utils';
import log from '../utils/logger.utils';

export const createUserHandler = async (req: Request<{}, {}, IUser>, res: Response) => {
  try {
    const user = await createUser(req.body);
    const token = createToken(user._id, user.isAdmin);
    res.status(201).json({ user, token });
  } catch (err: any) {
    log.error(err);
    const message = err instanceof Error ? err.message : 'Unknown error ocurred';
    res.status(400).json({ message, error: err });
  }
};

export const loginUserHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await loginUser(email, password);
    const token = createToken(user._id, user.isAdmin);
    res.status(201).json({ user, token });
  } catch (err: any) {
    log.error(err);
    const message = err instanceof Error ? err.message : 'Unknown error ocurred';
    res.status(500).json({ message, error: err });
  }
};
