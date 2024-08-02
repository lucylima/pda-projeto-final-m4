import express from 'express'
import { tryConnectSequelize } from './database/db.js'
import { userRouter } from './routes/User.routes.js'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`)
  tryConnectSequelize()
})
