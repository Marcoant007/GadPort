import { json, request, response, Router } from 'express'
import DeletedCompanyContactsService from '../services/CompanyContacts/DeletedCompanyContactsService';
import CreatedSituationStatusService from '../services/SituationStatus/CreatedSituationStatusService';
import DeletedSituationStatusService from '../services/SituationStatus/DeletedSituationStatusService';
import ListedSituationStatusService from '../services/SituationStatus/ListedSituationStatusService'
import UpdatedSituationStatusService from '../services/SituationStatus/UpdatedSituationStatus';



const situationStatusRouter = Router()

situationStatusRouter.get('/', async (request, response) => {
    const listsituationStatus = new ListedSituationStatusService();
    const situationStatus = await listsituationStatus.execute()
    return response.status(200).json(situationStatus)
})


situationStatusRouter.post('/', async (request, response) => {
    try {
        const { name } = request.body
        const createdSituationStatus = new CreatedSituationStatusService()
        const situationStatus = await createdSituationStatus.execute({
            name: name
        })
        return response.status(200).json(situationStatus)
    } catch (err) {
        return response.status(400).json({ error: err.message })

    }
})

situationStatusRouter.put('/:id', async (request, response) => {
    const { id } = request.params
    const { name } = request.body
    const updatedSituationStatus = new UpdatedSituationStatusService();
    const situationStatus = await updatedSituationStatus.execute({
        id: Number(id),
        name: name
    })
    return response.json(situationStatus)
})


situationStatusRouter.delete('/:id', async (request, response) => {
    const { id } = request.params
    const deletedSituationStatus = new DeletedSituationStatusService()
    await deletedSituationStatus.execute({ id: +id })
    return response.status(204).send({})
})



export default situationStatusRouter