import { getCustomRepository } from "typeorm";
import TicketsRepository from "../../repositories/TicketsRepository";

interface Request {
    id: number
}


class DeletedTicketService {
    public async execute({ id }: Request) {
        const ticketDeleted = getCustomRepository(TicketsRepository)
        await ticketDeleted.delete({ id: id })
    }
}

export default DeletedTicketService