import { getCustomRepository } from 'typeorm'
import UserRepository from '../../repositories/UserRepository'

class ListedUserService {
    public async execute() {
        const userRepository = getCustomRepository(UserRepository)
        const users = await userRepository.find()
        return users
    }
}

export default ListedUserService