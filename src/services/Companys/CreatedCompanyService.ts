import { getCustomRepository } from 'typeorm'
import Company from '../../models/Company'
import CompanyRepository from '../../repositories/CompanyRepository'


interface Request {
    id: number,
    code: number,
    name: string
}


class CreatedUserService {
    public async execute({ id, code, name }: Request): Promise<Company> {
        const companyRepository = getCustomRepository(CompanyRepository)
        const companyCreated = companyRepository.create({
            id,
            code,
            name
        })
        await companyRepository.save(companyCreated)
        return companyCreated
    }
}

export default CreatedUserService