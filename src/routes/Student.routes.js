import { Router } from 'express'
import {
  createStudents,
  deleteStudent,
  getStudents,
  updateStudent
} from '../controller/student.controller.js'

const studentRouter = Router()

studentRouter.get('/estudantes', getStudents)
studentRouter.post('/estudante/cadastrar', createStudents)
studentRouter.delete('/estudante/:cpf/:token/:studentId', deleteStudent)
studentRouter.put('/estudante/:cpf/:token/:studentId', updateStudent)

export { studentRouter }

