import { getCustomRepository } from 'typeorm'
import CompanyRepository from '../../repositories/CompanyRepository'

class FindCompanyByIdService {
    public async execute(id: number) {
        const companyRepository = getCustomRepository(CompanyRepository)
        const company = await companyRepository.findOne({
            where: { id: id }
        })

        return company
    }
}

export default FindCompanyByIdService