import { Router } from 'express';
import ticketsController from '../../controllers/tickets.controller.js';
import {wrapper} from '../../middleware/ctrlWrapper.js'

const ticketsRouter: Router = Router();

ticketsRouter.get(
  '/',
  wrapper(ticketsController.getAvailable.bind(ticketsController)),
);


export default ticketsRouter;