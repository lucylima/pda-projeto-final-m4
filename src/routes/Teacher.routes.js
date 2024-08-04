import { Router } from 'express'
import {
  createTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher
} from '../controller/Teacher.controller.js'

const TeacherRouter = Router()

TeacherRouter.post('/cadastrar/professor', createTeacher)
TeacherRouter.get('/professores', getTeacher)
TeacherRouter.put('/atualizar/professor/:id', updateTeacher)
TeacherRouter.delete('/deletar/professor/:id', deleteTeacher)

export { TeacherRouter }