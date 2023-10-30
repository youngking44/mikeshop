import User from '../models/user.model';
import { CreateUserType } from '../schema/user.schema';
import comparePassword from '../utils/auth.utils';

export const createUser = async (input: CreateUserType) => {
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
    const user = await User.findOne({ email });
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

export const getUserByToken = async (token: string) => {
  try {
    const user = await User.findOne({ token });
    return user;
  } catch (err) {
    throw err;
  }
};
