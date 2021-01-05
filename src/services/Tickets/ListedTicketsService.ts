import { getCustomRepository } from "typeorm";
import TicketsRepository from "../../repositories/TicketsRepository";



class ListedTicketService {
    public async execute() {
        const ticketsRepository = getCustomRepository(TicketsRepository)
        const tickets = await ticketsRepository.find()
        return tickets
    }
}


export default ListedTicketService