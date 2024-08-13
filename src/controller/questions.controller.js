import { Questions } from "../model/Questions.models.js";

const createQuestions = async (req, res) => {
    try {
        const { questao, resposta } = req.body;
        const newQuestions = await Questions.create({
            question: questao,
            answer: resposta,

        });
        return res.status(201).json({ newQuestions });
    } catch (erro) {
        return res.status(400).json({ error: erro.message });
    }
}

const getQuestions = async (req, res) => {
    try {
        const Questionss = await Questions.findAll();
        return res.status(200).json(Questionss);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteQuestions = async (req, res) => {
    const { id } = req.params;
    try {
        await Questions.destroy({
            where: {
                id
            }
        });
        return res.status(200).json({ message: 'Empresa deletado!' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const updateQuestions = async (req, res) => {
    const { id } = req.params
    const {
        question,
        answer

    } = req.body

    try {
        const [updated] = await Questions.update(
            {
                question,
                answer,

            },
            {
                where: { id },
                returning: true
            }
        )

        if (updated) {
            const updatedQuestions = await Questions.findOne({ where: { id } })
            return res.status(200).json(updatedQuestions)
        } else {
            return res
                .status(404)
                .json({ message: 'A questão foi encontrada' })
        }
    } catch (error) {
        return res.status(500).json({ error: 'Erro na questão' })
    }
}

export { getQuestions, createQuestions, updateQuestions, deleteQuestions }
