import { getCustomRepository } from "typeorm";
import SituationStatusRepository from "../../repositories/SituationStatusRepository";


interface Request {
    id: number
    name: string
}


class UpdatedSituationStatusService {
    public async execute({ name, id }: Request) {
        const situationStatusRepository = getCustomRepository(SituationStatusRepository)
        const situationStatusUpdated = await situationStatusRepository.save({
            id,
            name
        })
        return situationStatusUpdated
    }
}

export default UpdatedSituationStatusService