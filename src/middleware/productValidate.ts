import { Request, Response, NextFunction } from 'express';
import { Product } from '../types/Product';

const nameValidate = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body as Product;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }

  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }

  next();
};

const amountValidate = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body as Product;

  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }

  if (typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }

  if (amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }

  next();
};

const productMiddleware = { 
  nameValidate,
  amountValidate,
};

export default productMiddleware;