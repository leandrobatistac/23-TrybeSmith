import { Request, Response } from 'express';
import ordersServices from '../services/order.service';
import productsServices from '../services/products.service';
import tokenValidate from '../utils/auth';

async function findAll(req: Request, res: Response) {
  const orders = await ordersServices.findAll();
  return res.json(orders);
}

async function create(req: Request, res: Response) {
  const { productsIds } = req.body;
  const auth = req.header('Authorization');

  if (!auth) {
    throw new Error();
  }

  const token = tokenValidate.validateToken(auth);
  const idPessoa = token.id;

  const idOrder = await ordersServices.create(idPessoa);
  await productsServices.update(idOrder, productsIds);

  console.log(token);
  return res.status(201).json({ userId: idPessoa, productsIds });
}

const orderController = {
  findAll,
  create,
};

export default orderController;
