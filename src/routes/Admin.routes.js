import {
  createAdmin,
  readAdmin,
  readAdminParam,
  editAdmin,
  deleteAdmin,
  revealAdminToken
} from '../controller/Admin.controller.js'
import { Router } from 'express'

const adminRouter = Router()

adminRouter.get('/admin', readAdmin)
adminRouter.get("/admin/:id", readAdminParam)
adminRouter.get("/admin/reveal/:access/:cpf", revealAdminToken)
adminRouter.post('/admin/create', createAdmin)
adminRouter.put('/admin/:token', editAdmin)
adminRouter.delete('/admin/:cpf/:token', deleteAdmin)

export { adminRouter }
