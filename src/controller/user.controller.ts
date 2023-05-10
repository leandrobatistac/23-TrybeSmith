import { Request, Response } from 'express';
import userService from '../services/user.service';

async function create(req: Request, res: Response) {
  const user = req.body;
  const token = await userService.create(user);
  return res.status(201).json({ token });
}

const productController = {
  create,
};

export default productController;
