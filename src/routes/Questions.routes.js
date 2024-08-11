import { Router } from 'express'
import {
  createQuestions,
  getQuestions,
  updateQuestions,
  deleteQuestions,
} from '../controller/Questions.controller.js'

const questionsRouter = Router()

QuestionsRouter.post('/questions/create', createQuestions)
QuestionsRouter.get('/questions', getQuestions)
QuestionsRouter.put('/questions/edit/:id', updateQuestions)
QuestionsRouter.delete('/questions/delete/:id', deleteQuestions)

export { questionsRouter }