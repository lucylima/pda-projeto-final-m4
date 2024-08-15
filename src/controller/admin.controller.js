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
    return res.status(201).json(newAdmin)
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}

const readAdmin = async (req, res) => {
  try {
    const admins = await Admin.findAll({
      attributes: ['name', 'cpf', 'birthDate', 'address']
    })
    return res.status(200).json(admins)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const findAdmin = async (req, res) => {
  try {
    const { cpf } = req.params
    const admin = await Admin.findOne({
      where: { cpf },
    })
    if (admin) {
      return res.status(200).json(admin)
    } else {
      return res.status(404).json({ error: '404 not found' })
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

const revealAdminToken = async (req, res) => {
  try {
    const { access, cpf } = req.params
    if (access == 1234) {
      const admin = await Admin.findOne({
        where: { cpf }
      })
      if (admin) {
        return res.status(200).json(admin)
      } else {
        return res.status(404).json({ error: '404 not found' })
      }
    } else {
      return res.status(401).json({ error: 'senha inválida' })
    }
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const editAdmin = async (req, res) => {
  try {
    const { token } = req.params
    const { nome, cpf, dataDeNascimento, endereco } = req.body
    const editedAdmin = { nome, cpf, dataDeNascimento, endereco }
    try { 
      const admin = await Admin.findOne({ where: token })
      if (admin) {
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
      } else {
        res.status(401).json({ erorr: 'unauthorized' })
      }
    } catch (error) {
      res.status(404).json({ erorr: 'erro ao tentar validar token' })
    }
    return res.status(200).json(editedAdmin)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const deleteAdmin = async (req, res) => {
  try {
    const { cpf, token } = req.params
    let auth = await adminAuth(cpf, token)
    if (auth) {
      try {
        await Admin.destroy({
          where: {
            cpf,
            token
          }
        })
        return res.status(200).json('sucess')
      } catch (error) {
        return res.status(400).json(error)
      }
    }
    return res.status(404).json({ Error: '404 not found' })
  } catch (error) {
    return res
      .status(400)
      .json({ Error: 'problemas na autenticação' })
  }
}

export {
  createAdmin,
  readAdmin,
  findAdmin,
  editAdmin,
  deleteAdmin,
  revealAdminToken
}
