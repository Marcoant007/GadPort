import { getCustomRepository } from 'typeorm'
import UserRepository from '../../repositories/UserRepository'

interface Request {
    id: number
}

class DeletedUserService {
    public async execute({ id }: Request) {
        const userDeleted = getCustomRepository(UserRepository)
        await userDeleted.delete({ id: id })
    }
}

export default DeletedUserService