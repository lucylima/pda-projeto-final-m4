import { Router } from 'express'
import {
  createClass,
  getAllClasses,
  updateClass,
  deleteClass,
  findClass
} from '../controller/class.controller.js'

const classRouter = Router()

classRouter.get('/class', getAllClasses)
classRouter.get('/class/:id', findClass)
classRouter.post('/class/register', createClass) 
classRouter.put('/class/edit/:id', updateClass)
classRouter.delete('/class/delete/:id', deleteClass)

export { classRouter }