import { Company } from "../model/Company.model.js";

const createCompany = async (req, res) => {
    try {
        await Company.sync();
        const { nome, cnpj } = req.body;
        const newCompany = await Company.create({
            name: nome,
            cnpj: cnpj,

        });
        return res.status(201).json({ newCompany });
    } catch (erro) {
        return res.status(400).json({ error: erro.message });
    }
}

const getCompany = async (req, res) => {
    try {
        const companys = await Company.findAll();
        return res.status(200).json(companys);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteCompany = async (req, res) => {
    const { id } = req.params;
    try {
        await Company.destroy({
            where: {
                id
            }
        });
        return res.status(200).json({ message: 'Empresa deletado!' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const updateCompany = async (req, res) => {
    const { id } = req.body
    const {
        Name,
        cnpj

    } = req.body

    try {
        const [updated] = await Company.update(
            {
                Name,
                cnpj,

            },
            {
                where: { id },
                returning: true
            }
        )

        if (updated) {
            const updatedCompany = await Company.findOne({ where: { id } })
            return res.status(200).json(updatedCompany)
        } else {
            return res
                .status(404)
                .json({ message: 'Empresa  foi encontrado' })
        }
    } catch (error) {
        return res.status(500).json({ error: 'Erro na Empresa' })
    }
}

export { getCompany, createCompany, updateCompany, deleteCompany }