import { Request, Response } from 'express';
import { createUser, getUserByToken, loginUser } from '../service/auth.service';
import createToken, { IPayload } from '../utils/token.utils';
import log from '../utils/logger.utils';
import jwt from 'jsonwebtoken';
import config from 'config';
import { updateUser } from '../service/user.service';
import { CreateUserType } from '../schema/user.schema';

const maxAge = 3 * 24 * 60 * 60 * 1000;

export const createUserHandler = async (req: Request<{}, {}, CreateUserType>, res: Response) => {
  try {
    const newUser = await createUser(req.body);
    // I used newUser.toJSON() to convert the user document object to json before destructuring it.
    // I didn't use newUSer._doc when destructuring the user object to avoid typescript error.
    const { password, token, ...user } = newUser.toJSON();
    const payload = { id: newUser._id, isAdmin: newUser.isAdmin };
    const accessToken = createToken(payload, 'accessToken');
    const refreshToken = createToken(payload, 'refreshToken');
    newUser.token = refreshToken;
    await updateUser(newUser._id, newUser);
    res.cookie('jwt', refreshToken, { httpOnly: true, maxAge });
    res.status(201).json({ user, token: accessToken });
  } catch (err: any) {
    log.error(err);
    const message = err instanceof Error ? err.message : 'Unknown error ocurred';
    const statusCode = message.includes('Email has been used') ? 400 : 500;
    res.status(statusCode).json({ message, error: err });
  }
};

export const loginUserHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const newUser = await loginUser(email, password);
    // I used newUser.toJSON() to convert the user document object to json before destructuring it.
    // I didn't use newUSer._doc when destructuring the user object to avoid typescript error.
    const { password: pass, token, ...user } = newUser.toJSON();
    const payload = { id: newUser._id, isAdmin: newUser.isAdmin };
    const accessToken = createToken(payload, 'accessToken');
    const refreshToken = createToken(payload, 'refreshToken');
    newUser.token = refreshToken;
    await updateUser(newUser._id, newUser);
    res.cookie('jwt', refreshToken, { httpOnly: true, maxAge });
    res.status(200).json({ user, token: accessToken });
  } catch (err: any) {
    log.error(err);
    const message = err instanceof Error ? err.message : 'Unknown error ocurred';
    let statusCode = 500;
    if (message.includes('No user found')) {
      statusCode = 404;
    }

    if (message.includes('Password does not match')) {
      statusCode = 400;
    }
    res.status(statusCode).json({ message, error: err });
  }
};

export const refreshTokenHandler = async (req: Request, res: Response) => {
  const refreshToken = req.cookies?.jwt;
  const refreshTokenSecret = config.get<string>('refreshToken');
  if (!refreshToken) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(refreshToken, refreshTokenSecret);
    const { id, isAdmin } = decoded as IPayload;
    const user = await getUserByToken(refreshToken);
    if (!user) return res.sendStatus(403);
    const accessToken = createToken({ id, isAdmin }, 'accessToken');
    res.status(200).json(accessToken);
  } catch (err) {
    res.sendStatus(403);
  }
};
