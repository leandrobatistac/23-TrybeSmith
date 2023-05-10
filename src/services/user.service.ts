import userModel from '../models/user.model';
import { User } from '../types/User';
import tokens from '../utils/auth';

async function create(user:User): Promise<string> {
  const newUser = await userModel.create(user);
  return tokens.generateToken(newUser.id, newUser.username);
}

const userService = {
  create,
};

export default userService;
