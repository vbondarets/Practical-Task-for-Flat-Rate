import {NextFunction } from 'express';
import ApiError from '../helpers/error/ApiError.js'

export default class TicketsService {
  async getAvailable(id: string, next: NextFunction) {
    return;
  }

}