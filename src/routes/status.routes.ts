import { request, response, Router } from "express";
import CreatedStatusService from "../services/Status/CreatedStatusService";
import DeletedStatusService from "../services/Status/DeletedStatusService";
import ListedStatusService from "../services/Status/ListedStatusService";




const statusRouter = Router()


statusRouter.get('/', async (request, response) => {
    const listStatus = new ListedStatusService();
    const status = await listStatus.execute()
    console.log(status)
    return response.status(200).json(status)

})



statusRouter.post('/', async (request, response) => {
    try {

        const { name, situation_status_id } = request.body
        const createdStatus = new CreatedStatusService()
        const status = await createdStatus.execute({
            name: name,
            situation_status_id: situation_status_id
        }
        )
        return response.status(200).json(status)
    } catch (err) {
        return response.status(400).json({ error: err.message })

    }

})


statusRouter.delete('/:id', async (request, response) => {
    const { id } = request.params
    const deletedStatus = new DeletedStatusService()
    await deletedStatus.execute({ id: +id })
    return response.status(204).send({})
})


export default statusRouter