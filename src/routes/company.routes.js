import { Router } from 'express'
import {
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany
} from '../controller/company.controller.js'

const CompanyRouter = Router()

CompanyRouter.post('/register/company', createCompany)
CompanyRouter.get('/company', getCompany)
CompanyRouter.put('/estudante/:company_id', updateCompany)
CompanyRouter.delete('/delete/comapny/:id', deleteCompany)

export { CompanyRouter }