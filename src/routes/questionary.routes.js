import { Router } from 'express'
import {
  createQuestionary,
  getQuestionary,
  updateQuestionary,
  deleteQuestionary
} from '../controller/questionary.controller.js'

const QuestionaryRouter = Router()

QuestionaryRouter.post('/registrer/Questionary', createQuestionary)
QuestionaryRouter.get('/Questionary', getQuestionary)
QuestionaryRouter.put('/estudante/:Questionary_id', updateQuestionary)
QuestionaryRouter.delete('/delete/Questionary/:id', deleteQuestionary)


export { QuestionaryRouter }