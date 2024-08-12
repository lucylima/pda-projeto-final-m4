import { Router } from 'express'
import {
  createTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher
} from '../controller/teacher.controller.js'

const TeacherRouter = Router()

TeacherRouter.get('/teacher', getTeacher)
TeacherRouter.post('/teacher/register', createTeacher)
TeacherRouter.put('/teacher//update/:id', updateTeacher)
TeacherRouter.delete('/teacher/delete/:id', deleteTeacher)

export { TeacherRouter }
