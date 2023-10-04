import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

const validateResource = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse(req.body);
    next();
  } catch (e: any) {
    const message = 'Validation error';
    res.status(400).json({ message, error: e.errors });
  }
};

export default validateResource;
