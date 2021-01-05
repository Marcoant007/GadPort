import { getCustomRepository } from "typeorm";
import TicketsRepository from "../../repositories/TicketsRepository";



class FindTicketsbyIdService {
    public async execute(id: number) {
        const ticketsRepository = getCustomRepository(TicketsRepository)
        const ticket = await ticketsRepository.findOne
            ({ where: { id: id } })
        return ticket
    }
}

export default FindTicketsbyIdService