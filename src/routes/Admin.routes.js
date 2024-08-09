import { Router } from 'express'
import {
  createAdmin,
  readAdmin,
  editAdmin,
  deleteAdmin,
  revealAdminToken,
  findAdmin
} from '../controller/Admin.controller.js'

const adminRouter = Router()

adminRouter.get('/admin', readAdmin)
adminRouter.get("/admin/:cpf", findAdmin)
adminRouter.get("/admin/token/:access/:cpf", revealAdminToken)
adminRouter.post('/admin/register', createAdmin)
adminRouter.put('/admin/edit/:token', editAdmin)
adminRouter.delete('/admin/delete/:cpf/:token', deleteAdmin)

export { adminRouter }