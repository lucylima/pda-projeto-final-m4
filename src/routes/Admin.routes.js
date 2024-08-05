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
adminRouter.get("/admin/revelar-token/:access/:cpf", revealAdminToken)
adminRouter.post('/admin/cadastrar', createAdmin)
adminRouter.put('/admin/editar/:token', editAdmin)
adminRouter.delete('/admin/remover/:cpf/:token', deleteAdmin)

export { adminRouter }
