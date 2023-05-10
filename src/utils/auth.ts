import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET as string;
const configJWT:SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (id: number, username:string) => {
  const object = { id, username };
  const token = jwt.sign(object, secretKey, configJWT);
  return token;
};

const validateToken = (token: string) => {
  const isValid = jwt.verify(token, secretKey);
  return isValid as JwtPayload;
};

const tokens = {
  generateToken,
  validateToken,
};

export default tokens;
