import { Company } from '../model/Company.model.js'

const createCompany = async (req, res) => {
  try {
    const { nome, cnpj } = req.body
    const company = { nome, cnpj }
    const newCompany = await Company.create({
      name: nome,
      cnpj
    })
    return res.status(201).json({ sucess: company })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const getCompany = async (req, res) => {
  try {
    const company = await Company.findAll()
    return res.status(200).json({ company })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const findCompany = async (req, res) => {
  try {
    const { cnpj } = req.params
    const company = await Company.findOne({ where: cnpj })
    return res.status(200).json({ company })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const deleteCompany = async (req, res) => {
  try {
    const { cnpj } = req.params
    await Company.destroy({
      where: {
        cnpj
      }
    })
    return res.status(200).json({ sucess: 'Empresa deletada' })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const updateCompany = async (req, res) => {
  try {
    const { id } = req.params
    const { nome, cnpj } = req.body
    const company = await Company.findOne({
      where: { id },
      returning: true
    })
    if (company) {
      const editedCompany = await Company.update(
        {
          name: nome,
          cnpj
        },
        {
          where: { id }
        }
      )
      return res.status(200).json({ sucess: editedCompany })
    } else {
      return res
        .status(404)
        .json({ message: 'Empresa não foi encontrada' })
    }
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export {
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany,
  findCompany
}