import { getCustomRepository } from 'typeorm'
import CompanyRepository from '../../repositories/CompanyRepository'


class ListedCompanyService {
    public async execute() {
        const companyRepository = getCustomRepository(CompanyRepository)
        const company = await companyRepository.find()
        return company
    }
}

export default ListedCompanyService