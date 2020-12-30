import { getCustomRepository } from "typeorm";
import CompanyContactRepository from "../../repositories/CompanyContactsRepository";
interface Request {
    id: number
}
class DeletedCompanyContactsService {
    public async execute({ id }: Request) {
        const companyContactsDeleted = getCustomRepository(CompanyContactRepository)
        await companyContactsDeleted.delete({ id: id })
    }
}

export default DeletedCompanyContactsService