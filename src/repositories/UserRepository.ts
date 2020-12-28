import User from '../models/User'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(User)
class UserRepository extends Repository<User>{
    public async findByUser(name: string): Promise<User | undefined> {
        const findUser = await this.findOne({
            where: { name: name }
        })

        return findUser
    }

}

export default UserRepository