import { EntityRepository, Repository } from "typeorm";
import Status from "../models/Status";


@EntityRepository(Status)
class StatusRepository extends Repository<Status>{
    public async findByStatus(name: string): Promise<Status | undefined> {
        const findStatus = await this.findOne({
            where: { name: name }
        })

        return findStatus
    }
}

export default StatusRepository