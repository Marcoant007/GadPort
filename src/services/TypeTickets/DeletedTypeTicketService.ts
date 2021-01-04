import { getCustomRepository } from "typeorm";
import TypeTicketRepository from "../../repositories/TypeTicketsRepository";



interface Request {
    id: number
}

class DeletedTypeTicketService {
    public async execute({ id }: Request) {
        const typeDeleted = getCustomRepository(TypeTicketRepository)
        await typeDeleted.delete({ id: id })
    }
}

export default DeletedTypeTicketService