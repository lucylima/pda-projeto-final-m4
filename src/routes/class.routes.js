import { Router } from 'express'
import {
  createClass,
  getAllClasses,
  updateClass,
  deleteClass
} from '../controller/class.controller.js'

const classRouter = Router()

classRouter.post('/add/class', createClass)
classRouter.get('/classes', getAllClasses)
classRouter.put('/class/:class_id', updateClass)
classRouter.delete('/classes/delete/:class_id', deleteClass)

export { classRouter }
