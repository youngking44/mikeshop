import * as z from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z.string({ required_error: 'Email is required' }).email('Not a valid email'),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(6, 'Password length must be greater than 6'),
    phone: z.string({
      required_error: 'Phone number is required',
    }),
  }),
});

