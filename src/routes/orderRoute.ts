import express from 'express';
import orderController from '../controller/order.controller';

const orderRouter = express.Router();

orderRouter.get('/', orderController.findAll);

export default orderRouter;