import express from 'express'
import cors  from 'cors'
import { tryConnectSequelize } from './database/db.js'
import { jobRouter } from './routes/job.routes.js'
import { adminRouter } from './routes/admin.routes.js'
import { studentRouter } from './routes/student.routes.js'
import { classRouter } from './routes/class.routes.js'
import { TeacherRouter } from './routes/teacher.routes.js'
import { companyRouter } from './routes/company.routes.js'
import { questionaryRouter } from './routes/questionary.routes.js'

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

app.use(jobRouter)
app.use(adminRouter)
app.use(studentRouter)
app.use(classRouter)
app.use(TeacherRouter)
app.use(companyRouter)
app.use(questionaryRouter)

app.listen(port, () => {
  tryConnectSequelize()
  console.log(`servidor rodando na porta ${port}`)
})
