import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function findAll(req: Request, res: Response) {
  const products = await productsService.findAll();
  return res.json(products);
}

async function create(req: Request, res: Response) {
  const product = req.body;
  const newProduct = await productsService.create(product);
  return res.status(201).json(newProduct);
}

const productController = {
  findAll,
  create,
};

export default productController;
