import { Router } from 'express'
import {
  createStudents,
  deleteStudent,
  getStudents,
  updateStudent
} from '../controller/student.controller.js'

const studentRouter = Router()

studentRouter.get('/student', getStudents)
studentRouter.post('/student/register', createStudents)
studentRouter.delete('/student/:cpf/:token/:studentId', deleteStudent)
studentRouter.put('/student/:cpf/:token/:studentId', updateStudent)

export { studentRouter }

