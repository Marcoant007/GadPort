import { request, response, Router } from 'express'
import CreatedUserService from '../services/Users/CreatedUserService'
import DeletedUserService from '../services/Users/DeletedUserService'
import FindUserByIdService from '../services/Users/FindUserByIdService'
import ListedUserService from '../services/Users/ListedUserService'
import UpdatedUserService from '../services/Users/UpdatedUserService'


const userRouter = Router()


userRouter.get('/', async (request, response) => {

    const listUser = new ListedUserService();
    const users = await listUser.execute()
    return response.status(200).json(users)
})

userRouter.get('/:id', async (request, response) => {

    const { id } = request.params;
    const findById = new FindUserByIdService
    const user = await findById.execute(+id)
    return response.status(200).json(user)

})


userRouter.post('/', async (request, response) => {
    try {
        const { name, email, password } = request.body
        const createdUser = new CreatedUserService()
        const users = await createdUser.execute(
            {
                name: name,
                email: email,
                password: password
            }
        )
        return response.status(200).json(users)
    }
    catch (err) {
        return response.status(400).json({ error: err.message })
    }
})

userRouter.put('/:id', async (request, response) => {
    const { id } = request.params
    const { name, email, password } = request.body
    const updatedUser = new UpdatedUserService();
    const users = await updatedUser.execute({
        id: Number(id),
        name: name,
        email: email,
        password: password
    })
    return response.json(users)
})



userRouter.delete('/:id', async (request, response) => {
    const { id } = request.params
    const deletedUser = new DeletedUserService()
    await deletedUser.execute({ id: +id })
    return response.status(204).send({})
})


export default userRouter