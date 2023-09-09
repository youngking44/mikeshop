import userModel from '../models/user.model';
import User from '../models/user.model';
import comparePassword from '../utils/auth.utils';

export interface IUser {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export const createUser = async (input: IUser) => {
  try {
    const user = await User.findOne({ email: input.email });
    if (user) {
      throw Error('Email has been used');
    }
    return await User.create(input);
  } catch (err) {
    throw err;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      throw Error('No user found');
    }

    const matched = await comparePassword(password, user.password);
    if (!matched) {
      throw Error('Password does not match');
    }

    return user;
  } catch (err) {
    throw err;
  }
};
