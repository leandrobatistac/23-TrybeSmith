import productModel from '../models/products.model';
import { Product } from '../types/Product';

async function findAll(): Promise<Product[]> {
  const products = await productModel.findAll();
  return products;
}

async function create(product:Product): Promise<Product> {
  const newProduct = await productModel.create(product);
  return newProduct;
}

const productService = {
  findAll,
  create,
};

export default productService;
