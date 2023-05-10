import { ResultSetHeader } from 'mysql2/promise';
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

const userModel = {
  create,
};

export default userModel;