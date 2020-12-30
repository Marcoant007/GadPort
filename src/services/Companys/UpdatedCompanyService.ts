import { getCustomRepository } from 'typeorm'
import CompanyRepository from '../../repositories/CompanyRepository'




interface Request {
    id: number,
    code: number,
    name: string
}

class UpdatedCompanyService {
    public async execute({ id, code, name }: Request) {
        const companyRepository = getCustomRepository(CompanyRepository)
        const companyUpdated = await companyRepository.save({
            id,
            code,
            name
        })
        return companyUpdated
    }
}

export default UpdatedCompanyService