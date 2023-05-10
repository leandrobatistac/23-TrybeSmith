import express from 'express';
import productsRoute from './routes/productsRoute';
import userRoute from './routes/userRoute';
import orderRoute from './routes/orderRoute';
import loginRoute from './routes/loginRoute';

const app = express();
app.use(express.json());

app.use('/users', userRoute);
app.use('/products', productsRoute);
app.use('/orders', orderRoute);
app.use('/login', loginRoute);

export default app;
