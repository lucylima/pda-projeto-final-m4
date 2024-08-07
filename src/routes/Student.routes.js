import { Router } from 'express'
import {
  createStudents,
  deleteStudent,
  getStudents,
  updateStudent
} from '../controller/Student.controller.js'

const studentRouter = Router()

studentRouter.get('/estudantes', getStudents)
studentRouter.post('/cadastrar/estudante', createStudents)
studentRouter.delete('/estudantes/:student_id', deleteStudent)
studentRouter.put('/estudante/:student_id', updateStudent)

export { studentRouter }

