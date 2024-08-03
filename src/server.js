import express from 'express'
import { tryConnectSequelize } from './database/db.js'
import { userRouter } from './routes/User.routes.js'
import { jobRouter } from './routes/job.routes.js'
import { studentRouter } from './routes/Student.routes.js'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(jobRouter)
app.use(studentRouter)

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`)
  tryConnectSequelize()
})
