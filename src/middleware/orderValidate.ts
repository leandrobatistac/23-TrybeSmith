import { Request, Response, NextFunction } from 'express';
import auth from '../utils/auth';

const tokenValidate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    auth.validateToken(token);
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

const productValidate = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;

  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }

  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }

  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }

  next();
};

const orderMiddleware = { 
  tokenValidate,
  productValidate,
};

export default orderMiddleware;