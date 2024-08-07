import { Router } from 'express'
import {
  createTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher
} from '../controller/teacher.controller.js'

const TeacherRouter = Router()

TeacherRouter.post('/register/teacher', createTeacher)
TeacherRouter.get('/teacher', getTeacher)
TeacherRouter.put('/update/teacher/:id', updateTeacher)
TeacherRouter.delete('/delete/teacher/:id', deleteTeacher)

export { TeacherRouter }