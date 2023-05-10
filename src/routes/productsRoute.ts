import express from 'express';
import productsController from '../controller/products.controller';

const productRouter = express.Router();

productRouter.get('/', productsController.findAll);
productRouter.post('/', productsController.create);

export default productRouter;