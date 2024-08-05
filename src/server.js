import express from 'express'
import { tryConnectSequelize } from './database/db.js'
import { jobRouter } from './routes/job.routes.js'
import { adminRouter } from './routes/admin.routes.js'
import { studentRouter } from './routes/student.routes.js'
import { classRouter } from './routes/class.routes.js'
import { TeacherRouter } from './routes/teacher.routes.js'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(jobRouter)
app.use(adminRouter)
app.use(studentRouter)
app.use(classRouter)
app.use(TeacherRouter)

app.listen(port, () => {
  tryConnectSequelize()
  console.log(`servidor rodando na porta ${port}`)
})
