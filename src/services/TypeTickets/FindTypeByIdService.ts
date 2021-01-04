import { response } from "express";
import { getCustomRepository } from "typeorm";
import TypeTicketRepository from "../../repositories/TypeTicketsRepository";




class FindTypeByIdService {
    public async execute(id: number) {
        const typeRepository = getCustomRepository(TypeTicketRepository)
        const typeTickets = await typeRepository.findOne({
            where: { id: id }
        })
        return typeTickets
    }
}

export default FindTypeByIdService