import { request, response, Router } from 'express'
import CreatedCompanyContactsService from '../services/CompanyContacts/CreatedCompanyContactsService';
import DeletedCompanyContactsService from '../services/CompanyContacts/DeletedCompanyContactsService';
import FindCompanyContactsByIdService from '../services/CompanyContacts/FindCompanyContactsByIdService';
import ListedCompanyContactsService from '../services/CompanyContacts/ListedCompanyContactsService'
import UpdatedCompanyContactsService from '../services/CompanyContacts/UpdatedCompanyContactsService';



const companyContactsRouter = Router()


companyContactsRouter.get('/', async (request, response) => {

    const listCompanyContacts = new ListedCompanyContactsService();
    const companyContacts = await listCompanyContacts.execute()
    return response.json(companyContacts)

})

companyContactsRouter.get('/:id', async (request, response) => {
    const { id } = request.params
    const findCompanyContactsById = new FindCompanyContactsByIdService
    const companycontacts = await findCompanyContactsById.execute(+id)
    return response.json(companycontacts)
})


companyContactsRouter.post('/', async (request, response) => {
    try {

        const { name, office, email, telephone, companycontacts_id } = request.body
        const createdCompanyContacts = new CreatedCompanyContactsService()
        const companyContacts = await createdCompanyContacts.execute({
            name,
            office,
            email,
            telephone,
            companycontacts_id
        })
        return response.status(200).json(companyContacts)



    } catch (err) {
        return response.status(400).json({ error: err.message })

    }
})


companyContactsRouter.put('/:id', async (request, response) => {
    const { id } = request.params
    const { name, office, email, telephone, companycontacts_id } = request.body
    const updatedContacts = new UpdatedCompanyContactsService()
    const companyContacts = await updatedContacts.execute({
        id: Number(id),
        name: name,
        companycontacts_id: companycontacts_id,
        email: email,
        office: office,
        telephone: telephone
    })
    return response.json(companyContacts)
})


companyContactsRouter.delete('/:id', async (request, response) => {
    const { id } = request.params
    const deletedCompanyContacts = new DeletedCompanyContactsService()
    await deletedCompanyContacts.execute({ id: +id })
    return response.status(204).send({})

})

export default companyContactsRouter