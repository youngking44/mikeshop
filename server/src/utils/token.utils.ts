import jwt from 'jsonwebtoken';
import config from 'config';
import { Types } from 'mongoose';

const accessToken = config.get<string>('accessToken');
const refreshToken = config.get<string>('refreshToken');

export interface IPayload {
  id: Types.ObjectId;
  isAdmin: boolean;
}

const createToken = (payload: IPayload, tokenType: string) => {
  const tokenSecret = tokenType === 'accessToken' ? accessToken : refreshToken;
  const expiresIn = tokenType === 'accessToken' ? '15m' : '3d';
  const token = jwt.sign(payload, tokenSecret, { expiresIn });
  return token;
};

export default createToken;
