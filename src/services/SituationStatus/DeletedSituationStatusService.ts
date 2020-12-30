import { getCustomRepository } from "typeorm";
import SituationStatusRepository from "../../repositories/SituationStatusRepository";

interface Request {
    id: number
}

class DeletedSituationStatusService {
    public async execute({ id }: Request) {
        const situationStatusDeleted = getCustomRepository(SituationStatusRepository)
        await situationStatusDeleted.delete({ id })
    }
}

export default DeletedSituationStatusService