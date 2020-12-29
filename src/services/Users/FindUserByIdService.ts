import { getCustomRepository } from 'typeorm'
import UserRepository from '../../repositories/UserRepository'

class FindUserByIdService {
    public async execute(id: number) {

        const userRepository = getCustomRepository(UserRepository)
        const user = await userRepository.findOne({
            where: { id: id }
        })
        return user
    }
}

export default FindUserByIdService