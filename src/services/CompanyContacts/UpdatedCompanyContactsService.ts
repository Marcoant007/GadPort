import { getCustomRepository } from "typeorm";
import CompanyContactRepository from "../../repositories/CompanyContactsRepository";


interface Request {
    id: number
    name: string
    office: string
    email: string
    telephone: string
    companycontacts_id: number

}


class UpdatedCompanyContactsService {
    public async execute({ id, name, office, companycontacts_id, email, telephone }: Request) {
        const companyContactsRepository = getCustomRepository(CompanyContactRepository)
        const companyContactsUpdated = await companyContactsRepository.save({
            id,
            name,
            email,
            office,
            telephone,
            companycontacts_id
        })
        return companyContactsUpdated
    }
}

export default UpdatedCompanyContactsService