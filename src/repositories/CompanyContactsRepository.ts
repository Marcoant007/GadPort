import CompanyContact from '../models/CompanyContact'
import { EntityRepository, Repository } from 'typeorm'
import CompanyRepository from './CompanyRepository'




@EntityRepository(CompanyContact)
class CompanyContactRepository extends Repository<CompanyContact>{
    public async findByCompanyContact(email: string): Promise<CompanyContact | undefined> {
        const findCompany = await this.findOne({
            where: { email: email }
        })

        return findCompany
    }
}

export default CompanyContactRepository