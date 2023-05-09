import { RowDataPacket } from 'mysql2/promise';
import { Product } from '../types/Product';
import connection from './connection';

async function findAll(): Promise<Product[]> {
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * from Trybesmith.products');
  return rows as Product[];
}

export default {
  findAll,
};
