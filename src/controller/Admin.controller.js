import { Admin } from '../model/Admin.model.js'
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
    Model.findAll({
      attributes: ['foo', 'bar'],
    });
  }
}
const readAdminParam = async (req, res) => {
  try {
    const { id } = req.params

    return res.status(200).json(admin)
  } catch (error) {
    
  }
}
const editAdmin = async (req, res) => {}
const deleteAdmin = async (req, res) => {}

export { createAdmin, readAdmin, readAdminParam }
