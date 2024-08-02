import { User } from '../model/User.model.js'

const createUser = async (req, res) => {
  try {
    await User.sync()
    const {
      nome,
      cpf,
      dataDeNascimento,
      nis,
      endereco,
      rendaFamiliar
    } = req.body
    const newUser = await User.create({
      fullName: nome,
      cpf,
      birthDate: dataDeNascimento,
      nis,
      address: endereco,
      familyIncome: rendaFamiliar
    })
    return res.status(201).json(newUser)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export { createUser, getUsers }
