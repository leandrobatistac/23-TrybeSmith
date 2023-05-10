import express from 'express';
import orderController from '../controller/order.controller';
import orderMiddleware from '../middleware/orderValidate';

const orderValidator = [
  orderMiddleware.tokenValidate,
  orderMiddleware.productValidate,
];

const orderRouter = express.Router();

orderRouter.get('/', orderController.findAll);
orderRouter.post('/', orderValidator, orderController.create);

export default orderRouter;