import { Request, Response } from 'express';
import ordersServices from '../services/order.service';

async function findAll(req: Request, res: Response) {
  const orders = await ordersServices.findAll();
  return res.json(orders);
}

const orderController = {
  findAll,
};

export default orderController;
