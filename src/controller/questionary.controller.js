import { Questionary } from "../model/Questionary.model.js";

const createQuestionary = async (req, res) => {
    try {
        const { id, course } = req.body;
        const newQuestionary = await Questionary.create({

            course: course,

        });

        return res.status(201).json({ newQuestionary });
    } catch (erro) {
        return res.status(400).json({ error: erro.message });
    }
}


const getQuestionary = async (req, res) => {
    try {
        const Questionary = await Questionary.findAll();
        return res.status(200).json(Questionary);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const updateQuestionary = async (req, res) => {
    const { id } = req.body
    const {
        course,
        
    } = req.body

    try {
        const [updated] = await Questionary.update(
            {
                course,
              
            },
            {
                where: { id },
                returning: true
            }
        )

        if (updated) {
            const updatedQuestionary = await Questionary.findOne({ where: { id } })
            return res.status(200).json(updatedQuestionary)
        } else {
            return res
                .status(404)
                .json({ message: 'Questionario  não foi encontrado' })
        }
    } catch (error) {
        return res.status(500).json({ error: 'Erro no Questionario' })
    }
}

const deleteQuestionary = async (req, res) => {
    const { id } = req.params;
    try {
        await Questionary.destroy({
            where: {
                id
            }
        });
        return res.status(200).json({ message: 'Questionario deletado!' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export { getQuestionary, createQuestionary, updateQuestionary, deleteQuestionary }