import { Router } from 'express'
import {
  createTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher
} from '../controller/teacher.controller.js'

const teacherRouter = Router()

teacherRouter.get('/teacher', getTeacher)
teacherRouter.post('/teacher/register', createTeacher)
teacherRouter.put('/teacher//update/:id', updateTeacher)
teacherRouter.delete('/teacher/delete/:id', deleteTeacher)

export { teacherRouter }