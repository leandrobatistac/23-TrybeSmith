import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { Order } from '../types/Order';
import connection from './connection';

async function findAll(): Promise<Order[]> {
  const [rows] = await connection.execute<RowDataPacket[]>(`
  SELECT od.id, od.user_id AS userId,
  JSON_ARRAYAGG(pr.id) AS productsIds 
  FROM Trybesmith.orders AS od
  INNER JOIN Trybesmith.products AS pr ON pr.order_id = od.id
  GROUP BY od.id;`);
  return rows as Order[];
}

async function create(userId:number): Promise<number> {
  const [result] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) values (?)',
    [userId],
  );
  const { insertId } = result;
  return insertId;
}

const orderModel = {
  findAll,
  create,
};

export default orderModel;