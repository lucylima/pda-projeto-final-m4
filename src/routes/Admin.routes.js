import {
  createAdmin,
  readAdmin,
  readAdminParam
} from '../controller/Admin.controller.js'
import { Router } from 'express'

const adminRouter = Router()

adminRouter.post('/admin/create', createAdmin)

export { adminRouter }
