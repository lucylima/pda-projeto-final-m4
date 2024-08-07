import { Router } from 'express'
import {
  createAdmin,
  readAdmin,
  readAdminParam,
  editAdmin,
  deleteAdmin,
  revealAdminToken
} from '../controller/Admin.controller.js'

const adminRouter = Router()

adminRouter.get('/admin', readAdmin)
adminRouter.get("/admin/:id", readAdminParam)
adminRouter.get("/admin/token/:access/:cpf", revealAdminToken)
adminRouter.post('/admin/register', createAdmin)
adminRouter.put('/admin/edit/:token', editAdmin)
adminRouter.delete('/admin/delete/:cpf/:token', deleteAdmin)

export { adminRouter }