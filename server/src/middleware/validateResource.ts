import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';
import log from '../utils/logger.utils';

const validateResource = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({
      body: req.body,
    });

    next();
  } catch (e: any) {
    log.error(e);
    return res.status(400).send(e.errors);
  }
};

export default validateResource;
