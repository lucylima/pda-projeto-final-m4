import { Router } from 'express'
import {
  createQuestions,
  getQuestions,
  updateQuestions,
  deleteQuestions,
} from '../controller/Questions.controller.js'

const questionsRouter = Router()

questionsRouter.get('/questions', getQuestions)
questionsRouter.post('/questions/add', createQuestions)
questionsRouter.put('/questions/edit/:id', updateQuestions)
questionsRouter.delete('/questions/delete/:id', deleteQuestions)

export { questionsRouter }