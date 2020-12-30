import { getCustomRepository } from "typeorm";
import Status from "../../models/Status";
import StatusRepository from "../../repositories/StatusRepository";



class ListedStatusService {
    public async execute() {
        const statusRepository = getCustomRepository(StatusRepository)
        const status = await statusRepository.find()
        //  console.log(status)
        return status
    }
}

export default ListedStatusService