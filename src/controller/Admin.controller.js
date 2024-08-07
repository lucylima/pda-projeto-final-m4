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
    return res.status(400).json({ erro: error })
  }
}

const readAdmin = async (req, res) => {
  try {
    const admins = await Admin.findAll({
      attributes: ['name', 'cpf', 'birthDate', 'address']
    })
    return res.status(200).json({ admins })
  } catch (error) {
    return res.status(400).json(error)
  }
}

const readAdminParam = async (req, res) => {
  try {
    const { id } = req.params
    const admin = await Admin.findOne({ where: { id: Number(id) } })
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
  const { access, cpf } = req.params
  try {
    if (access == 1234) {
      const admin = await Admin.findOne({
        where: { cpf },
        attributes: { exclude: ['id'] }
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
  try {
    const { cpf, token } = req.params
    let auth = await adminAuth(cpf, token)
    if (auth) {
      try {
        const deletedAdmin = await Admin.destroy({
          where: {
            cpf,
            token
          }
        })
        return res.status(200).json({ Sucesso: auth })
      } catch (error) {
        return res.status(400).json({ Error: error })
      }
    }
    return res.status(404).json({ Error: '404 not found' })
  } catch (error) {
    return res
      .status(400)
      .json({ Error: 'problemas na autenticação', error })
  }
}

export {
  createAdmin,
  readAdmin,
  readAdminParam,
  editAdmin,
  deleteAdmin,
  revealAdminToken
}
