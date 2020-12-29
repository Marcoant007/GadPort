import { request, response, Router } from 'express'
import CreatedCompanyContactsService from '../services/CompanyContacts/CreatedCompanyContactsService';
import ListedCompanyContactsService from '../services/CompanyContacts/ListedCompanyContactsService'



const companyContactsRouter = Router()


companyContactsRouter.get('/', async (request, response) => {

    const listCompanyContacts = new ListedCompanyContactsService();
    const companyContacts = await listCompanyContacts.execute()
    return response.json(companyContacts)


})


companyContactsRouter.post('/', async (request, response) => {

})
