import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function findAll(req: Request, res: Response) {
  const products = await productsService.findAll();
  return res.json(products);
}

export default {
  findAll,
};
