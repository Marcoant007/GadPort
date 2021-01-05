import { EntityRepository, Repository } from "typeorm";
import Ticket from "../models/Ticket";

@EntityRepository(Ticket)
class TicketsRepository extends Repository<Ticket>{
    public async findByTicket(id: number): Promise<Ticket | undefined> {
        const findTickets = await this.findOne({
            where: { id: id }
        })
        return findTickets
    }
}

export default TicketsRepository