import { Router } from 'express'
import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJobs,
} from '../controller/job.controller.js'

const jobRouter = Router()

jobRouter.post('/add/job', createJob)
jobRouter.get('/see/job', getAllJobs)
jobRouter.put('/update/job/:id', updateJobs)
jobRouter.delete('/delete/job/:id', deleteJob)

export { jobRouter }