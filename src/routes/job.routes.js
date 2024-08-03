import { Router } from 'express'
import {
  createJob,
  deleteJob,
  getAllJobs
} from '../controller/job.controller.js'

const jobRouter = Router()

jobRouter.post('/add/vagas', createJob)
jobRouter.get('/ver/vagas', getAllJobs)
jobRouter.delete('/deletar/vaga/:id', deleteJob)

export { jobRouter }