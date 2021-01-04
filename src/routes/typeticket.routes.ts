import { request, response, Router } from "express";
import CreatedTypeTickestService from "../services/TypeTickets/CreatedTypeTicketsService";
import DeletedTypeTicketService from "../services/TypeTickets/DeletedTypeTicketService";
import FindTypeByIdService from "../services/TypeTickets/FindTypeByIdService";
import ListedTypeService from "../services/TypeTickets/ListedTypeTicketsService";






const typeRouter = Router()

typeRouter.get('/', async (request, response) => {
    const listType = new ListedTypeService()
    const types = await listType.execute()
    return response.status(200).json(types)
})

typeRouter.get('/:id', async (request, response) => {
    const { id } = request.params
    const findById = new FindTypeByIdService
    const type = await findById.execute(+id)
    return response.status(200).json(type)
})


typeRouter.post('/', async (request, response) => {
    try {
        const { name } = request.body
        const createdType = new CreatedTypeTickestService()
        const types = await createdType.execute({
            name
        })
        return response.status(200).json(types)
    } catch (err) {
        return response.status(400).json({ error: err.mensage })
    }
})


typeRouter.delete('/:id', async (request, response) => {
    const { id } = request.params
    const deletedType = new DeletedTypeTicketService
    await deletedType.execute({ id: +id })
    return response.status(204).send({})
})

export default typeRouter