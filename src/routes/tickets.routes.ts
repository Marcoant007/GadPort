import { request, response, Router } from "express"
import CreatedTicketService from "../services/Tickets/CreatedTicketsService"
import DeletedTicketService from "../services/Tickets/DeletedTicketsService"
import FindTicketsbyIdService from "../services/Tickets/FindTicketsByIdService"
import ListedTicketService from "../services/Tickets/ListedTicketsService"
import UpdatedTicketService from "../services/Tickets/UpdatedTicketsService"



const ticketsRouter = Router()

ticketsRouter.get('/', async (request, response) => {
    const listTickets = new ListedTicketService()
    const tickets = await listTickets.execute()
    return response.status(200).json(tickets)
})

ticketsRouter.get('/:id', async (request, response) => {
    const { id } = request.params;
    const findByid = new FindTicketsbyIdService
    const tickets = await findByid.execute(+id)
    return response.status(200).json(tickets)
})

ticketsRouter.post('/', async (request, response) => {
    try {
        const { contact,
            initial_date,
            final_date,
            fcr,
            evaluation,
            problem,
            company_id,
            user_id,
            channel_communication_id,
            type_ticket_id,
            status_id } = request.body
        const createdTicket = new CreatedTicketService
        const ticket = await createdTicket.execute({
            contact,
            initial_date,
            final_date,
            fcr,
            evaluation,
            problem,
            company_id,
            user_id,
            channel_communication_id,
            type_ticket_id,
            status_id
        })
        return response.status(200).json(ticket)

    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
})

ticketsRouter.put('/:id', async (request, response) => {
    const { id } = request.params
    const { contact,
        initial_date,
        final_date,
        fcr,
        evaluation,
        problem,
        company_id,
        user_id,
        channel_communication_id,
        type_ticket_id,
        status_id } = request.body

    const updatedTicket = new UpdatedTicketService();
    const tickets = await updatedTicket.execute({
        id: Number(id),
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

    return response.json(tickets)
})


ticketsRouter.delete('/:id', async (request, response) => {
    const { id } = request.params
    const deletedTicket = new DeletedTicketService()
    await deletedTicket.execute({ id: +id })
    return response.status(204).send({})

})


export default ticketsRouter