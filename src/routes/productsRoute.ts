import express from 'express';
import productsController from '../controller/products.controller';
import productValidate from '../middleware/productValidate';

const productRouter = express.Router();

const productValidators = [
  productValidate.nameValidate, 
  productValidate.amountValidate,
];

productRouter.get('/', productsController.findAll);
productRouter.post('/', productValidators, productsController.create);

export default productRouter;