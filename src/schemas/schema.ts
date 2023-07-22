import { buildSchema } from "graphql";

export const schema = buildSchema (`
    type availableSeat {
        Section: String
        Row: String
        SeatNumber: String
        Price: Int
    }

    type Query {
        getAvailableTickets(id: String): [availableSeat]
    }
`)