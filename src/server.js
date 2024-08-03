import express from 'express'
import { tryConnectSequelize } from './database/db.js'
import { jobRouter } from './routes/job.routes.js'
import { adminRouter } from './routes/Admin.routes.js'
import { studentRouter } from './routes/Student.routes.js'
import { classRouter } from './routes/class.routes.js'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(jobRouter)
app.use(adminRouter)
app.use(studentRouter)
app.use(classRouter)

app.listen(port, () => {
  tryConnectSequelize()
  console.log(`servidor rodando na porta ${port}`)
})