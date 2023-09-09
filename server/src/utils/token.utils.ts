import jwt from 'jsonwebtoken';
import config from 'config';
import { Types } from 'mongoose';

const jwtSecret = config.get<string>('jwtSecret');

const createToken = (id: Types.ObjectId, isAdmin: boolean) => {
  const token = jwt.sign({ id, isAdmin }, jwtSecret, { expiresIn: '3d' });
  console.log('Token payload.....', id, isAdmin);
  return token;
};

export default createToken;
