import { Request, Response, NextFunction } from 'express';
import { User } from '../types/User';

const loginValidate = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body as User;

  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

const loginMiddleware = { 
  loginValidate,
};

export default loginMiddleware;