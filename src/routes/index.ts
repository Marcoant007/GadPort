import { Router } from 'express'
import userRouter from './user.routes'
import companyRouter from './company.routes'
import channelRouter from './channel.routes'
import companyContactsRouter from './companyContacts.routes'
import situationStatusRouter from './situationstatus.routes'
import statusRouter from './status.routes'
import typeRouter from './typeticket.routes'

const routes = Router()
routes.use('/user', userRouter)
routes.use('/company', companyRouter)
routes.use('/channel', channelRouter)
routes.use('/companycontacts', companyContactsRouter)
routes.use('/situationstatus', situationStatusRouter)
routes.use('/status', statusRouter)
routes.use('/typetickets', typeRouter)


export default routes;