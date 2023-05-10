import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Product } from '../types/Product';
import connection from './connection';

async function findAll(): Promise<Product[]> {
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * from Trybesmith.products');
  return rows as Product[];
}

async function create(product:Product): Promise<Product> {
  const { name, amount } = product;
  const [result] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) values (?, ?)',
    [name, amount],
  );
  const { insertId } = result;
  return { id: insertId, name, amount } as Product;
}

const productModel = {
  findAll,
  create,
};

export default productModel;