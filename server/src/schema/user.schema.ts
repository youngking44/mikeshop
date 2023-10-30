import z from 'zod';

export const createUserSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().min(1, 'Email is required').email('Not a valid email'),
    password: z.string().min(6, 'Password length must be greater than 6'),
    confirmPassword: z.string().min(1, 'Confirm password field is required'),
    phone: z.string().min(1, 'Phone number is required'),
    address: z.string().min(1, 'Address is required'),
  })
  .refine((data) => data.password === data.confirmPassword, { path: ['confirmPassword'], message: "Password don't match" });

export type CreateUserType = z.infer<typeof createUserSchema>;

export const updateUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Not a valid email'),
  password: z.string().min(6, 'Password length must be greater than 6'),
  phone: z.string().min(1, 'Phone number is required'),
  address: z.string().min(1, 'Address is required'),
});

export const loginUserSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Not a valid email'),
  password: z.string().min(6, 'Password length must be greater than 6'),
});
