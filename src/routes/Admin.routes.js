import {
  createAdmin,
  readAdmin
} from '../controller/Admin.controller.js'
import { Router } from 'express'

const adminRouter = Router()

adminRouter.post('/admin/create', createAdmin)
adminRouter.get('/admin', readAdmin)

export { adminRouter }