import { request, response, Router } from 'express'
import { Index } from 'typeorm';
import CreatedCompanyService from '../services/Companys/CreatedCompanyService';
import DeletedCompanyService from '../services/Companys/DeletedCompanyService';
import FindCompanyByIdService from '../services/Companys/FindCompanyByIdService';
import ListedCompanyService from '../services/Companys/ListedCompanyService'
import UpdatedCompanyService from '../services/Companys/UpdatedCompanyService';


const companyRouter = Router();


companyRouter.get('/', async (request, response) => {
    const listedCompany = new ListedCompanyService();
    const company = await listedCompany.execute()
    return response.json(company)
})


companyRouter.get('/:id', async (request, response) => {
    const { id } = request.params
    const findById = new FindCompanyByIdService
    const company = await findById.execute(+id)
    return response.json(company)
})

companyRouter.post('/', async (request, response) => {
    try {
        const { id, code, name } = request.body
        const createCompany = new CreatedCompanyService();
        const company = await createCompany.execute({
            id: id,
            code: code,
            name: name
        })

        return response.status(200).json(company)

    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
})

companyRouter.put('/:id', async (request, response) => {
    const { id } = request.params
    const { name, code } = request.body
    const updatedCompany = new UpdatedCompanyService()
    const company = await updatedCompany.execute({
        id: Number(id),
        name: name,
        code: code
    })
    return response.json(company)
})


companyRouter.delete('/:id', async (request, response) => {
    const { id } = request.params
    const deletedCompany = new DeletedCompanyService()
    await deletedCompany.execute({ id: +id })
    return response.status(204).send({})

})

export default companyRouter