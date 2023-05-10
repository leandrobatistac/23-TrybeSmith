import orderModel from '../models/orders.model';
import { Order } from '../types/Order';

async function findAll(): Promise<Order[]> {
  const orders = await orderModel.findAll();
  return orders;
}

async function create(userId:number): Promise<number> {
  const newOrder = await orderModel.create(userId);
  return newOrder;
}

const orderService = {
  findAll,
  create,
};

export default orderService;
