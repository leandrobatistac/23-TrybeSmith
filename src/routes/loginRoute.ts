import express from 'express';
import loginController from '../controller/login.controller';
import loginMiddleware from '../middleware/loginValidate';

const loginRouter = express.Router();

loginRouter.post('/', loginMiddleware.loginValidate, loginController.findByUsername);

export default loginRouter;