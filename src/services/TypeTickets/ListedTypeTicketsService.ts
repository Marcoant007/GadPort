import { getCustomRepository } from "typeorm";
import TypeTicketRepository from "../../repositories/TypeTicketsRepository";



class ListedTypeService {
    public async execute() {
        const typeRepository = getCustomRepository(TypeTicketRepository)
        const types = await typeRepository.find()
        return types
    }
}

export default ListedTypeService