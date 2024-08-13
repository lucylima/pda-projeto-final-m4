import { Router } from 'express'
import {
  createQuestionary,
  getQuestionary,
  updateQuestionary,
  deleteQuestionary
} from '../controller/questionary.controller.js'

const questionaryRouter = Router()

questionaryRouter.post('/questionary/add', createQuestionary)
questionaryRouter.get('/questionary', getQuestionary)
questionaryRouter.put('/questionary/edit/:id', updateQuestionary)
questionaryRouter.delete('/questionary/delete/:id', deleteQuestionary)


export { questionaryRouter }