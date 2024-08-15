import { Router } from 'express'
import {
  createQuestionary,
  getQuestionary,
  updateQuestionary,
  deleteQuestionary
} from '../controller/questionary.controller.js'

const questionaryRouter = Router()

questionaryRouter.get('/questionary', getQuestionary)
questionaryRouter.post('/questionary/add', createQuestionary)
questionaryRouter.put('/questionary/edit/:id', updateQuestionary)
questionaryRouter.delete('/questionary/delete/:id', deleteQuestionary)


export { questionaryRouter }