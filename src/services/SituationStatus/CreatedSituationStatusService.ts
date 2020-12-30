import { getCustomRepository } from "typeorm";
import SituationStatus from "../../models/SituationStatus";
import SituationStatusRepository from "../../repositories/SituationStatusRepository";


interface Request {
    name: string
}

class CreatedSituationStatusService {
    public async execute({ name }: Request): Promise<SituationStatus> {
        const situationStatusRepository = getCustomRepository(SituationStatusRepository)
        const situationStatusCreated = situationStatusRepository.create({
            name
        })
        await situationStatusRepository.save(situationStatusCreated)
        return situationStatusCreated
    }
}

export default CreatedSituationStatusService