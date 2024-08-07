import { Router } from 'express'
import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJobs,
} from '../controller/job.controller.js'

const jobRouter = Router()

jobRouter.post('/add/vacancies', createJob)
jobRouter.get('/see/vacancies', getAllJobs)
jobRouter.put('/update/vacancies/:id', updateJobs)
jobRouter.delete('/delete/vacancy/:id', deleteJob)

export { jobRouter }