import { Request, Response } from 'express';
import loginService from '../services/login.service';
import tokens from '../utils/auth';

async function findByUsername(req: Request, res: Response) {
  const { username, password } = req.body;
  const [user] = await loginService.findByUsername(username);

  if (!user || user.password !== password) {
    res.status(401).json({ message: 'Username or password invalid' });
  } else {
    const token = tokens.generateToken(user.id, user.username);
    return res.status(200).json({ token });
  }
}

const loginController = {
  findByUsername,
};

export default loginController;
