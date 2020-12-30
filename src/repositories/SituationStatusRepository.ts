import { EntityRepository, Repository } from "typeorm";
import SituationStatus from "../models/SituationStatus";



@EntityRepository(SituationStatus)
class SituationStatusRepository extends Repository<SituationStatus>{
    public async findBySituation(name: string): Promise<SituationStatus | undefined> {
        const findSituationStatus = await this.findOne({
            where: { name: name }
        })
        return findSituationStatus
    }
}

export default SituationStatusRepository