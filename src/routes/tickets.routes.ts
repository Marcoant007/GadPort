import { request, response, Router } from "express"
import CreatedTicketService from "../services/Tickets/CreatedTicketsService"
import ListedTicketService from "../services/Tickets/ListedTicketsService"



const ticketsRouter = Router()

ticketsRouter.get('/', async (request, response) => {
    const listTickets = new ListedTicketService()
    const tickets = await listTickets.execute()
    return response.status(200).json(tickets)
})


ticketsRouter.post('/', async (request, response) => {
    try {
        const { body } = request.body
        const createdTicket = new CreatedTicketService
        const ticket = await createdTicket.execute(body)
        return response.status(200).json(ticket)

    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
})

export default ticketsRouter