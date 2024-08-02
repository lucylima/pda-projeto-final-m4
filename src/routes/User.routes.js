import { Router } from 'express'
import {
  createUser,
  getUsers
} from '../controller/User.controller.js'

const userRouter = Router()

userRouter.get('/admin/usuarios', getUsers)
userRouter.post('/inscrever-se', createUser)

export { userRouter }