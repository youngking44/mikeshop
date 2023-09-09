import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from 'config';

const jwtSecret = config.get<string>('jwtSecret');

interface JwtPayload {
  id: string;
  isAdmin: boolean;
}

export const verifyToken = (req: Request, res: Response, next: () => void) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Not authenticated' });
  const token = authHeader.split(' ')[1];
  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) {
      res.status(403).json({ message: 'Token is not valid' });
    } else {
      req.user = user as JwtPayload;
      next();
    }
  });
};

export const verifyTokenAndAuthorization = (req: Request, res: Response, next: NextFunction) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: "You're not authorized" });
    }
  });
};

export const verifyTokenAndAdmin = (req: Request, res: Response, next: NextFunction) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id && req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: "You're not authorized" });
    }
  });
};
