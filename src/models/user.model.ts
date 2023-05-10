import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { User } from '../types/User';
import connection from './connection';

async function create(user:User): Promise<User> {
  const { username, vocation, level, password } = user;
  const [result] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) values (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const { insertId } = result;
  return { id: insertId, username, vocation, level, password } as User;
}

async function findByUsername(username:string): Promise<User[]> {
  const [rows] = await connection
    .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.users WHERE username=(?)', [username]);
  return rows as User[];
}

const userModel = {
  create,
  findByUsername,
};

export default userModel;