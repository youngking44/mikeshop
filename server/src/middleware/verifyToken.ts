import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from 'config';

const accessToken = config.get<string>('accessToken');

interface JwtPayload {
  id: string;
  isAdmin: boolean;
}

interface IParams {
  id: string;
}

export const verifyToken = (req: Request, res: Response, next: () => void) => {
  //req.headers.authorization || req.headers.Authorization i did this to allow the frontend developer to attach authorization to the headers with letter "a" either in lowercase or uppercase.
  const authHeader = req.headers.authorization || (req.headers.Authorization as string);
  if (!authHeader) return res.status(401).json({ message: 'Not authenticated' });
  const token = authHeader.split(' ')[1];
  jwt.verify(token, accessToken, (err, user) => {
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
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: "You're not authorized" });
    }
  });
};
