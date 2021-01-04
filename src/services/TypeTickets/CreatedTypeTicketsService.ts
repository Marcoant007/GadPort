import { getCustomRepository } from "typeorm";
import TypeTicket from "../../models/TypeTicket";
import TypeTicketRepository from "../../repositories/TypeTicketsRepository";


interface Request {
    name: string

}


class CreatedTypeTickestService {
    public async execute({ name }: Request): Promise<TypeTicket> {
        const typeRepository = getCustomRepository(TypeTicketRepository)
        const typeCreate = typeRepository.create({
            name: name,
        })

        await typeRepository.save(typeCreate)
        return typeCreate
    }
}

export default CreatedTypeTickestService