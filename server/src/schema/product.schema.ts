import z from 'zod';

export const ProductSchema = z.object({
  title: z.string().min(1, 'Product title is required'),
  desc: z.string().min(1, 'Product description is required'),
  color: z.string().array().min(1, 'Product color is required'),
  category: z.string().min(1, 'Product category is required'),
  brand: z.string().min(1, 'Product brand is required'),
  price: z
    .number({
      invalid_type_error: 'Product price must be a number',
    })
    .min(1, 'Product price is required'),
  img: z.string().min(1, 'Product image is required'),
});

export type ProductType = z.infer<typeof ProductSchema>;
