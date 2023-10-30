import mongoose from 'mongoose';
import User from '../models/user.model';
import { CreateUserType } from '../schema/user.schema';

type UserType = Omit<CreateUserType, 'confirmPassword'>;
type UserIdType = string | mongoose.Types.ObjectId;

export const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw err;
  }
};

export const getUserById = async (id: UserIdType) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw err;
  }
};

export const updateUser = async (id: UserIdType, payload: UserType) => {
  try {
    const user = await User.findByIdAndUpdate(id, { $set: payload }, { new: true });
    return user;
  } catch (err) {
    throw err;
  }
};

export const deleteUser = async (id: UserIdType) => {
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (err) {
    throw err;
  }
};
