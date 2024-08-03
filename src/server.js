import express from 'express'
import { tryConnectSequelize } from './database/db.js'
import { userRouter } from './routes/User.routes.js'
import { jobRouter } from './routes/job.routes.js'
import { adminRouter } from './routes/Admin.routes.js'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(jobRouter)
app.use(adminRouter)

app.listen(port, () => {
  tryConnectSequelize()
  console.log(`servidor rodando na porta ${port}`)
})