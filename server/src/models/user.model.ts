import mongoose, { InferSchemaType, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';

const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    isAdmin: { type: Boolean, default: false },
    token: { type: String, default: '' },
  },
  { timestamps: true },
);

type User = InferSchemaType<typeof UserSchema>;

UserSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'));
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
  return next();
});

const userModel = mongoose.model<User>('User', UserSchema);

export default userModel;
