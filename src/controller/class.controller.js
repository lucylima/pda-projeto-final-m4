import { Class } from '../model/Class.model.js'
import { Teacher } from '../model/Teacher.model.js'

const createClass = async (req, res) => {
  try {
    const { name, capacity, course, teacher } = req.body
    const newClass = await Class.create({
      name,
      capacity,
      course,
      teacher_id: teacher
    })
    return res.status(201).json(newClass)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.findAll()
    return res.status(200).json(classes)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const findClass = async (req, res) => {
  try {
    const { id } = req.params
    const foundClass = await Class.findOne({
      where: id
    })
    if (foundClass) {
      return res.status(200).json(foundClass)
    } else {
      return res.status(404).json({ error: '404 not found' })
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

const updateClass = async (req, res) => {
  const { id } = req.body
  const { name, capacity, course, teacher } = req.body

  try {
    const updated = await Class.update(
      {
        name,
        capacity,
        course,
        teacher
      },
      {
        where: { id },
        returning: true
      }
    )

    if (updated) {
      const updatedClass = await Class.findOne({ where: { id } })
      return res.status(200).json(updatedClass)
    } else {
      return res
        .status(404)
        .json({ message: 'A Turma foi encontrada' })
    }
  } catch (error) {
    return res.status(500).json({ error: 'Erro na Turma digitada' })
  }
}

const deleteClass = async (req, res) => {
  const { id } = req.params
  await Class.destroy({
    where: {
      id
    }
  })
  return res.status(200).json({ message: 'Turma deletada!' })
}

export {
  createClass,
  getAllClasses,
  updateClass,
  deleteClass,
  findClass
}
