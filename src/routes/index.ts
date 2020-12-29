import { Router } from 'express'
import userRouter from './user.routes'
import companyRouter from './company.routes'
import channelRouter from './channel.routes'

const routes = Router()
routes.use('/user', userRouter)
routes.use('/company', companyRouter)
routes.use('/channel', channelRouter)


export default routes;