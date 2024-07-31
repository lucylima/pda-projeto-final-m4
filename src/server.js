import express from 'express'
import { tryConnect } from './database/db.js'

const app = express()
const port = process.env.PORT

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`)
  tryConnect()
})
