import { getCustomRepository } from "typeorm";
import CompanyContactRepository from "../../repositories/CompanyContactsRepository";



class FindCompanyContactsByIdService {
    public async execute(id: number) {
        const companyContactsRepository = getCustomRepository(CompanyContactRepository)
        const companycontacts = await companyContactsRepository.findOne({
            where: { id: id }
        })

        return companycontacts
    }
}

export default FindCompanyContactsByIdService