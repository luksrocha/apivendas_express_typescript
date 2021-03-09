import { Router } from 'express';
import productsRouter from '../../../modules/products/routes/products-router';


const routes = Router();

routes.use('/products', productsRouter);

export default routes;
