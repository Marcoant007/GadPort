import { EntityRepository, Repository } from "typeorm";
import TypeTicket from "../models/TypeTicket";



@EntityRepository(TypeTicket)
class TypeTicketRepository extends Repository<TypeTicket>{
    public async findById(id: number): Promise<TypeTicket | undefined> {
        const findType = await this.findOne({
            where: { id: id }
        })

        return findType
    }
}

export default TypeTicketRepository