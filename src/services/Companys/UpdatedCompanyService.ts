import { getCustomRepository } from 'typeorm'
import Company from '../../models/Company'
import CompanyRepository from '../../repositories/CompanyRepository'
import UpdatedUserService from '../Users/UpdatedUserService'



interface Request {
    id: number,
    code: number,
    name: string
}

class UpdatedCompanyService {
    public async execute(company: Company) {
        const companyRepository = getCustomRepository(CompanyRepository)
        const companyUpdated = await companyRepository.save(company)
        return companyUpdated
    }
}

export default UpdatedCompanyService