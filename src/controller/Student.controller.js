import { Student } from '../model/Student.model.js'

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

    const newStudent = await Student.create({
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
  const { student_id } = req.params
  const { cpf, token } = req.body
  if (admin) {
    try {
      const result = await Student.destroy({
        where: {
          id: student_id
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
  const { id } = req.body
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
        where: { id },
        returning: true
      }
    )

    if (updated) {
      const updatedStudent = await Student.findOne({ where: { id } })
      return res.status(200).json(updatedStudent)
    } else {
      return res
        .status(404)
        .json({ message: 'Estudante foi encontrado' })
    }
  } catch (error) {
    return res.status(500).json({ error: 'Erro no estudante' })
  }
}

export { getStudents, createStudents, updateStudent, deleteStudent }
