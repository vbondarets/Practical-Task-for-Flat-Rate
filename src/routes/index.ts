import { Application } from 'express';
import ticketsRouter from './api/tickets.route.js';


class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get('/', (_req, res) => {
      res.send('It\'s working !');
    });
    this.app.use('/api/tickets', ticketsRouter);
  }
}

export default AppRouter;