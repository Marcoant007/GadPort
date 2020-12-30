import { response } from 'express'
import { getCustomRepository } from 'typeorm'
import CompanyContact from '../../models/CompanyContact'
import CompanyContactRepository from '../../repositories/CompanyContactsRepository'
import CompanyRepository from '../../repositories/CompanyContactsRepository'

interface Request {
    name: string,
    office: string,
    email: string,
    telephone: string,
    companycontacts_id: number

}


class CreatedCompanyContactsService {
    public async execute({ name, office, email, telephone, companycontacts_id }: Request): Promise<CompanyContact> {
        const companyContactsRepository = getCustomRepository(CompanyContactRepository)
        const companyContactsCreated = companyContactsRepository.create({
            name,
            office,
            email,
            telephone,
            companycontacts_id
        })
        await companyContactsRepository.save(companyContactsCreated)
        return companyContactsCreated
    }
}

export default CreatedCompanyContactsService