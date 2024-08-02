import { Jobs} from "../model/job.models.js";

const createJob = async (req, res) => {
    try {
        await Jobs.sync();
        const {
            nomeVaga,
            area,
            descricao,
            empresa
        } = req.body
        const newJob = await Jobs.create({
            name: nomeVaga,
            area: area,
            description: descricao,
            company: empresa
        })
        return res.status(201).json(newJob)
    } catch (error) {
        res.status(400).json(error)
    };
};


const getAllJobs = async (req, res) => {
    try {
        const work = await Jobs.findAll();
        return res.status(200).json(work);
    } catch (error) {
        return res.status(400).json(error);
    };
};


const deleteJob = async (req, res) => {

    const { id } = req.params;
    await Jobs.destroy({
        where: {
            id
        },
    });
    return res.status(200).json({message: "Vaga deletada!!"});
};


export { createJob, getAllJobs, deleteJob}