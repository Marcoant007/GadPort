import { Router } from 'express'
import userRouter from './user.routes'
import companyRouter from './company.routes'

const routes = Router()
routes.use('/user', userRouter)
routes.use('/company', companyRouter)


export default routes;