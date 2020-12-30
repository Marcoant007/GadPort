import { getCustomRepository } from "typeorm";
import SituationStatusRepository from "../../repositories/SituationStatusRepository";



class ListedSituationStatusService {
    public async execute() {
        const situationStatusRepository = getCustomRepository(SituationStatusRepository)
        const situationStatus = await situationStatusRepository.find()
        return situationStatus
    }
}

export default ListedSituationStatusService