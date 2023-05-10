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

async function update(orderId:number, productId:number[]) {
  const editedProduct = await Promise.all(
    productId.map((id) => productModel.update(orderId, id)),
  );
  return editedProduct;
}

const productService = {
  findAll,
  create,
  update,
};

export default productService;
