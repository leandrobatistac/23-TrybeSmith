import express from 'express';
import userController from '../controller/user.controller';
import userValidate from '../middleware/userValidate';

const userValidators = [
  userValidate.usernameValidate, 
  userValidate.vocationValidate,
  userValidate.levelValidate,
  userValidate.passwordValidate,
];

const userRouter = express.Router();

userRouter.post('/', userValidators, userController.create);

export default userRouter;