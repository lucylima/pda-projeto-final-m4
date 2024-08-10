import { Jobs } from '../model/job.models.js'

const createJob = async (req, res) => {
  try {
    const { nomeVaga, area, descricao, empresa } = req.body
    const newJob = await Jobs.create({
      name: nomeVaga,
      area: area,
      description: descricao,
      company_id: empresa
    })
    return res.status(201).json(newJob)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getAllJobs = async (req, res) => {
  try {
    const work = await Jobs.findAll()
    return res.status(200).json(work)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const updateJobs = async (req, res) => {
  const { id } = req.params
  const { name, area, description, company_id } = req.body

  try {
    const [updated] = await Jobs.update(
      {
        name,
        area,
        description,
        company_id
      },
      {
        where: { id },
        returning: true
      }
    )

    if (updated) {
      const updateJobs = await Jobs.findOne({ where: { id } })
      return res.status(200).json(updateJobs)
    } else {
      res.status(404).json({ message: 'Vaga não encontrada!!' })
    }
  } catch (error) {
    return res.status(500).json({ error: 'Erro na vaga inserida' })
  }
}

const deleteJob = async (req, res) => {
  const { id } = req.params
  await Jobs.destroy({
    where: {
      id
    }
  })
  return res.status(200).json({ message: 'Vaga deletada!!' })
}

export { createJob, getAllJobs, deleteJob, updateJobs }
