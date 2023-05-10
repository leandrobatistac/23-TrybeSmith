import userModel from '../models/user.model';
import { User } from '../types/User';

async function findByUsername(username:string): Promise<User[]> {
  const user = await userModel.findByUsername(username);
  return user;
}

const loginService = {
  findByUsername,
};

export default loginService;
