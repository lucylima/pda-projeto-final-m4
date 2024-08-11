import { Student } from '../model/Student.model.js'
import { registrationNumber } from '../utils/numberPlate.js'
import { adminAuth } from '../model/Admin.model.js'

const getStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    return res.status(200).json(students)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const createStudents = async (req, res) => {
  try {
    await Student.sync()
    const {
      nome,
      cpf,
      dataDeNascimento,
      nis,
      endereco,
      rendaFamiliar,
      turma,
      curso
    } = req.body

    let matricula = registrationNumber()

    const students = await Student.findAll()

    const allIdStudents = students.map((student) => student.id)

    while (allIdStudents.includes(matricula)) {
      matricula = registrationNumber()
    }

    const newStudent = await Student.create({
      studentId: matricula,
      fullName: nome,
      cpf,
      birthDate: dataDeNascimento,
      nis,
      address: endereco,
      familyIncome: rendaFamiliar,
      class: turma,
      course: curso
    })
    return res.status(201).json(newStudent)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const deleteStudent = async (req, res) => {
  const { cpf, token, studentId } = req.params

  let admin = await adminAuth(cpf, token)
  if (admin) {
    try {
      await Student.destroy({
        where: {
          studentId: studentId
        }
      })
      return res.status(200).json({
        message: 'Deletado estudante com sucesso!'
      })
    } catch (error) {
      console.log(error)
      return res
        .status(500)
        .json({ error: 'Erro ao deletar o estudante' })
    }
  } else {
    res.status(401).json({ message: 'Falha na autenticação' })
  }
}
const updateStudent = async (req, res) => {
  const { CPF, token, studentId } = req.params

  let admin = await adminAuth(CPF, token)
  if (admin) {
    const {
      fullName,
      cpf,
      birthDate,
      nis,
      address,
      familyIncome,
      turma,
      course
    } = req.body

    try {
      const [updated] = await Student.update(
        {
          fullName,
          cpf,
          birthDate,
          nis,
          address,
          familyIncome,
          turma,
          course
        },
        {
          where: { studentId },
          returning: true
        }
      )

      if (updated) {
        const updatedStudent = await Student.findOne({
          where: { studentId }
        })
        return res.status(200).json(updatedStudent)
      } else {
        return res
          .status(404)
          .json({ message: 'Estudante não foi encontrado' })
      }
    } catch (error) {
      console.log(error)
      return res
        .status(500)
        .json({ error: 'Erro ao atualizar o estudante' })
    }
  } else {
    res.status(401).json({ message: 'Falha na autenticação' })
  }
}

export { getStudents, createStudents, updateStudent, deleteStudent }
