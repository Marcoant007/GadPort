import { getCustomRepository } from 'typeorm'
import User from '../../models/User'
import UserRepository from '../../repositories/UserRepository'
import { hash } from 'bcryptjs'

interface Request {

    name: string
    email: string
    password: string

}
class CreatedUserService {
    public async execute({ name, email, password }: Request): Promise<User> {
        const userRepository = getCustomRepository(UserRepository)
        const hashedPassword = await hash(password, 8)
        const userCreate = userRepository.create({
            name,
            email,
            password: hashedPassword
        })
        await userRepository.save(userCreate)
        return userCreate

    }
}

export default CreatedUserService