import { getCustomRepository } from "typeorm";
import Status from "../../models/Status";
import StatusRepository from "../../repositories/StatusRepository";




interface Request {

    name: string,
    situation_status_id: number

}

class CreatedStatusService {
    public async execute({ name, situation_status_id }: Request): Promise<Status> {
        const statusRepository = getCustomRepository(StatusRepository)
        const statusCreated = statusRepository.create({
            name,
            situation_status_id
        })
        await statusRepository.save(statusCreated)
        return statusCreated

    }
}

export default CreatedStatusService