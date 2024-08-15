import { Router } from 'express'
import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJobs,
} from '../controller/job.controller.js'

const jobRouter = Router()

jobRouter.post('/job/add', createJob)
jobRouter.get('/job', getAllJobs)
jobRouter.put('job/update/:id', updateJobs)
jobRouter.delete('/job/delete/:id', deleteJob)

export { jobRouter }