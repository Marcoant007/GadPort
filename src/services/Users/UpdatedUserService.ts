import { getCustomRepository } from 'typeorm'
import User from '../../models/User'
import UserRepository from '../../repositories/UserRepository'

interface Request {
    id: number,
    name: string,
    email: string,
    password: string
}


class UpdatedUserService {
    public async execute({ id, name, email, password }: Request) {
        const usersrepository = getCustomRepository(UserRepository)
        const usersUpdated = await usersrepository.save({
            id,
            name,
            email,
            password
        })
        return usersUpdated
    }
}

export default UpdatedUserService