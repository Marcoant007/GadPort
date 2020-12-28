import Company from '../models/Company'
import { EntityRepository, Repository } from 'typeorm'


@EntityRepository(Company)
class CompanyRepository extends Repository<Company>{
    public async findByCompany(name: string): Promise<Company | undefined> {
        const findCompany = await this.findOne({
            where: { name: name }
        })

        return findCompany
    }
}

export default CompanyRepository