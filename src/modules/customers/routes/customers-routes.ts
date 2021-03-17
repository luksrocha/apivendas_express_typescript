import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';
import CustomersControllers from '../controllers/CustomersControllers';


const customersRouter = Router();
customersRouter.use(isAuthenticated)
const customersController = new CustomersControllers();

customersRouter.get('/', customersController.index);

customersRouter.get('/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  })
  , customersController.show
);

customersRouter.post('/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    }
  }),
  customersController.create
);

customersRouter.put('/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  customersController.update
);

customersRouter.delete('/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  })
  , customersController.delete
);

export default customersRouter;
