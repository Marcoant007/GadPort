import { getCustomRepository } from 'typeorm'
import User from '../../models/User'
import UserRepository from '../../repositories/UserRepository'

interface Request {

    name: string
    email: string
    password: string

}

class CreatedUserService {
    public async execute({ name, email, password }: Request): Promise<User> {
        const userRepository = getCustomRepository(UserRepository)
        const userCreate = userRepository.create({
            name: name,
            email: email,
            password: password
        })
        await userRepository.save(userCreate)
        return userCreate
    }
}

export default CreatedUserService