import { Router } from 'express'
import UserController from './controllers/UserController'

const routers = Router()

routers.get('/users', UserController.index)
routers.post('/users', UserController.store)

export default routers
