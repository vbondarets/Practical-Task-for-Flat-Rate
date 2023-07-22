import { Request, Response, NextFunction } from 'express';
import {TicketsService} from '../services/tickets.service.js';
import { IID } from '../types/id.type.js';
import ApiError from '../helpers/error/ApiError.js';


export class TicketsController {
  constructor(private TicketsService: TicketsService) {}

  async getAvailable(req: Request, res: Response, next : NextFunction) {
    const { id }: IID = req.params;
    if(!id){
      // throw next(ApiError.conflict("There is no ID"))
    }
    const tickets = await this.TicketsService.getAvailable(id, next);
    if(tickets.length === 0){
      throw next(ApiError.notFound("There is no tickets"))
    }
    return res.json(tickets);
  }
}

const ticketsController = new TicketsController(new TicketsService());

export default ticketsController;