import productsModel from '../models/products.model';
import { Product } from '../types/Product';

async function findAll(): Promise<Product[]> {
  const products = await productsModel.findAll();
  return products;
}

export default {
  findAll,
};
