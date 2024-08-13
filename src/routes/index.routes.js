import { Router } from 'express'
import { showEveryRoute } from '../controller/index.controller.js'

const indexRouter = Router()

indexRouter.get('/', showEveryRoute)

export { indexRouter }