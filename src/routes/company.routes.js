import { Router } from 'express'
import {
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany,
  findCompany
} from '../controller/company.controller.js'

const companyRouter = Router()

companyRouter.get('/company', getCompany)
companyRouter.get('/company/:cnpj', findCompany)
companyRouter.post('/company/register', createCompany)
companyRouter.put('/company/edit/:id', updateCompany)
companyRouter.delete('/company/delete/:cnpj', deleteCompany)

export { companyRouter }