import { Request, Response, NextFunction } from 'express';
import TicketsService from '../services/tickets.service.js';
import { IID } from '../types/id.type.js';


export class TicketsController {
  constructor(private TicketsService: TicketsService) {}

  async getAvailable(req: Request, res: Response, next : NextFunction) {
    const { id }: IID = req.params;
    const tickets = await this.TicketsService.getAvailable(id, next);
    return res.json(tickets);
  }
}

const ticketsController = new TicketsController(new TicketsService());

export default ticketsController;