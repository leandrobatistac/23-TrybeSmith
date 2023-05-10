import express from 'express';
import productsRoute from './routes/productsRoute';
import userRoute from './routes/userRoute';

const app = express();
app.use(express.json());

app.use('/users', userRoute);
app.use('/products', productsRoute);

export default app;
