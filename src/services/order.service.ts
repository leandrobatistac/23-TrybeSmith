import orderModel from '../models/orders.model';
import { Order } from '../types/Order';

async function findAll(): Promise<Order[]> {
  const orders = await orderModel.findAll();
  return orders;
}

const orderService = {
  findAll,
};

export default orderService;
