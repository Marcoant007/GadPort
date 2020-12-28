import { getCustomRepository } from 'typeorm'
import CompanyRepository from '../../repositories/CompanyRepository'

interface Request {
    id: number
}

class DeletedCompanyService {
    public async execute({ id }: Request) {
        const companyDeleted = getCustomRepository(CompanyRepository)
        await companyDeleted.delete({ id: id })
    }
}

export default DeletedCompanyService