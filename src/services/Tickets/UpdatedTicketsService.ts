import { getCustomRepository } from "typeorm";
import TicketsRepository from "../../repositories/TicketsRepository";

interface Request {
    id: number
    contact: string
    initial_date: Date
    final_date: Date
    fcr: boolean
    evaluation: string
    problem: string
    company_id: number
    user_id: number
    channel_communication_id: number
    type_ticket_id: number
    status_id: number
}

class UpdatedTicketService {
    public async execute({ id, contact, initial_date, final_date, fcr, evaluation, problem, company_id, user_id,
        channel_communication_id, type_ticket_id, status_id }: Request) {
        const ticketsRepository = getCustomRepository(TicketsRepository)
        const ticketUpdated = await ticketsRepository.save({
            id,
            contact,
            initial_date,
            final_date,
            fcr,
            evaluation,
            problem,
            company_id,
            user_id,
            channel_communication_id,
            type_ticket_id, status_id
        })
        return ticketUpdated
    }
}

export default UpdatedTicketService