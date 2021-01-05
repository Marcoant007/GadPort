import { getCustomRepository } from "typeorm";
import Ticket from "../../models/Ticket";
import TicketsRepository from "../../repositories/TicketsRepository";




interface Request {
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

class CreatedTicketService {
    public async execute({ contact, initial_date, final_date, fcr, evaluation, problem, company_id, user_id, channel_communication_id, type_ticket_id, status_id }: Request): Promise<Ticket> {
        const ticketsRepository = getCustomRepository(TicketsRepository)
        const ticketsCreated = ticketsRepository.create({
            contact: contact,
            initial_date: initial_date,
            final_date: final_date,
            fcr: fcr,
            evaluation: evaluation,
            problem: problem,
            company_id: company_id,
            user_id: user_id,
            channel_communication_id: channel_communication_id,
            type_ticket_id: type_ticket_id,
            status_id: status_id
        })
        await ticketsRepository.save(ticketsCreated)
        return ticketsCreated
    }

}

export default CreatedTicketService