import { Router } from 'express'
import {
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany
} from '../controller/company.controller.js'

const companyRouter = Router()

companyRouter.post('/register/company', createCompany)
companyRouter.get('/company', getCompany)
companyRouter.put('/estudante/:company_id', updateCompany)
companyRouter.delete('/delete/comapny/:id', deleteCompany)

export { companyRouter }