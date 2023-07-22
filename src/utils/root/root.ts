import {TicketsService} from "../../services/tickets.service.js";
import { IID } from "../../types/id.type.js";


export const root = {
    getAvailableTickets: async ({id} : IID) => {
        const ticketService = new TicketsService()
        const availableSeats = await ticketService.getAvailable(id as string);
        return availableSeats;
    }

    
}