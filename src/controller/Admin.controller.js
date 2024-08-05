import { Admin, adminAuth } from '../model/Admin.model.js'
import { nameFormatter } from '../utils/nameFormat.js'

const createAdmin = async (req, res) => {
  try {
    const { nome, cpf, dataDeNascimento, endereco } = req.body
    const newAdmin = { nome, cpf, dataDeNascimento, endereco }
    await Admin.create({
      name: nameFormatter(nome),
      cpf,
      birthDate: dataDeNascimento,
      address: endereco
    })
    return res.status(201).json({ sucesso: newAdmin })
  } catch (error) {
    return res.status(500).json({ erro: error })
  }
}

const readAdmin = async (req, res) => {
  try {
    const admins = await Admin.findAll({
      attributes: ['name', 'cpf', 'birthDate', 'address']
    })
    return res.status(200).json(admins)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const readAdminParam = async (req, res) => {
  try {
    const { id } = req.params
    const admin = await Admin.findOne({ where: id })
    return res.status(200).json(admin)
  } catch (error) {}
}

const editAdmin = async (req, res) => {
  try {
    const { nome, cpf, dataDeNascimento, endereco } = req.body
    const { token } = req.params
    await Admin.update(
      {
        name: nameFormatter(nome),
        cpf,
        birthDate: dataDeNascimento,
        address: endereco
      },
      {
        where: {
          token: token
        }
      }
    )
    return res.status(200).json({
      sucess: {
        nome,
        cpf,
        dataDeNascimento,
        endereco
      }
    })
  } catch (error) {
    return res.status(400).json({ errorMessage: error })
  }
}
const deleteAdmin = async (req, res) => {
  const { cpf, token } = req.params
  try {
    let auth = await adminAuth(cpf, token)
    if (auth) {
      try {
        const deletedAdmin = await Admin.destroy({
          where: {
            cpf,
            token
          }
        })
        return res.status(200).json(auth)
      } catch (error) {
        return res.status(400).json(error)
      }
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

export {
  createAdmin,
  readAdmin,
  readAdminParam,
  editAdmin,
  deleteAdmin
}
