import { request, response, Router } from 'express'
import CreatedUserService from '../services/Users/CreatedUserService'
import ListedUserService from '../services/Users/ListedUserService'
//import DeletedUserService from '../services/Users/DeletedUserService'
//import UpdatedUserService from '../services/Users/UpdatedUserService'


const userRouter = Router()

userRouter.get('/', async (request, response) => {
    const listUser = new ListedUserService();
    const users = await listUser.execute()
    return response.status(200).json(users)
})

userRouter.post('/', async (request, response) => {
    try {
        const { body } = request.body
        const createdUser = new CreatedUserService()
        const users = await createdUser.execute(body)
        return response.status(200).json(users)
    }
    catch (err) {
        return response.status(400).json({ error: err.message })
    }
})

export default userRouter