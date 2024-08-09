import { Router } from 'express'
import {
  createQuestionary,
  getQuestionary,
  updateQuestionary,
  deleteQuestionary
} from '../controller/questionary.controller.js'

const questionaryRouter = Router()

questionaryRouter.post('/registrer/Questionary', createQuestionary)
questionaryRouter.get('/Questionary', getQuestionary)
questionaryRouter.put('/estudante/:Questionary_id', updateQuestionary)
questionaryRouter.delete('/delete/Questionary/:id', deleteQuestionary)


export { questionaryRouter }