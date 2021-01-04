import { getCustomRepository } from "typeorm";
import StatusRepository from "../../repositories/StatusRepository";

interface Request {
    id: number
}

class DeletedStatusService {
    public async execute({ id }: Request) {
        const deletedStatus = getCustomRepository(StatusRepository)
        await deletedStatus.delete({ id: id })
    }
}

export default DeletedStatusService