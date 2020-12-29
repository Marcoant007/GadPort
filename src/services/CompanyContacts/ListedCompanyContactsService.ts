import { getCustomRepository } from "typeorm";
import CompanyContactRepository from "../../repositories/CompanyContactsRepository";




class ListedCompanyContactsService {
    public async execute() {
        const companyContactsRepository = getCustomRepository(CompanyContactRepository)
        const companyContacts = await companyContactsRepository.find()
        return companyContacts
    }
}

export default ListedCompanyContactsService