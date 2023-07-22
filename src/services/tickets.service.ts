import { NextFunction } from 'express';
import ApiError from '../helpers/error/ApiError.js'
import LAPhil from '../utils/API/LAPhil.js';
import { IPrice } from '../types/pricing.type.js';
import { ISeat } from '../types/seat.type.js';
import { IZone } from '../types/zone.type.js';
import _ from 'lodash'

export class TicketsService {
  async getAvailable(id: string, next?: NextFunction) {
    const event = await LAPhil.getEvent(id);
    if (event.length === 0 && next) {
      throw next(ApiError.notFound('Event not found'));
    }
    const prices = await LAPhil.getPrices(id).then((result: any) => {
      return result.map((element: IPrice) => {
        if (element.PerformanceId === 0) {
          const { ZoneId, Price }: IPrice = element;
          return { ZoneId, Price };
        }
      }).filter((n: IPrice) => n);
    });
    const zones = await LAPhil.getZones(id).then((result: any) => {
      return _.find(result, (element: IZone) => element.PerformanceId === 0).Zones.map((zone: IZone) => {
        const { Id, Description }: IZone = zone;
        return { Id, Description };
      })

    });
    const seats = await LAPhil.getSeats(id).then((result: any) => {
      const availableSeats = _.map(result, (element: ISeat) => {
        if (element.SeatStatusId === 0) {
          const { SeatNumber, SeatRow, ZoneId }: ISeat = element;
          return { SeatNumber, SeatRow, ZoneId };
        }
      })

      return _.filter(availableSeats, (n: ISeat) => n)
    });
    const result = _.map(seats, (seat: ISeat) => {
      const { SeatNumber, SeatRow, ZoneId }: ISeat = seat;
      return {
        Section: _.find(zones, (element: IZone) => element.Id === ZoneId).Description,
        Row: SeatRow,
        SeatNumber,
        Price: _.find(prices, (element: IPrice) => element.ZoneId === ZoneId).Price
      }
    })
    return result;
  }

}