import { Router } from "express";
import { createStudents, deleteStudent, getStudents, updateStudent } from "../controller/Student.controller.js";

const studentRouter = Router()

studentRouter.get('/admin/estudantes', getStudents )
studentRouter.post('/cadastro/estudantes', createStudents )
studentRouter.delete('/delete/estudantes', deleteStudent )
studentRouter.put('/update/estudantes', updateStudent )

export {studentRouter}