import { Teacher } from "../model/Teacher.model.js";

export const createTeacher = async (req, res) => {
    try {
        await Teacher.sync();
        const { nome, cpf, dataDeNascimento } = req.body;
        const newTeacher = await Teacher.create({
            name: nome,
            cpf: cpf,
            birthDate: dataDeNascimento
        });
        return res.status(201).json({ newTeacher });
    } catch (erro) {
        return res.status(400).json({ error: erro.message });
    }
}

export const getTeacher = async (req, res) => {
    try {
        const teachers = await Teacher.findAll();
        return res.status(200).json(teachers);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const deleteTeacher = async (req, res) => {
    const { id } = req.params;
    try {
        await Teacher.destroy({
            where: {
                id
            }
        });
        return res.status(200).json({ message: 'Professor deletado!' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const updateTeacher = async (req, res) => {
    const { id } = req.params;
    const { nome, cpf, dataDeNascimento } = req.body;
    try {
        const teacher = await Teacher.findByPk(id);
        if (!teacher) {
            return res.status(404).json({ error: 'Professor não encontrado' });
        }
        teacher.name = nome || teacher.name;
        teacher.cpf = cpf || teacher.cpf;
        teacher.birthDate = dataDeNascimento || teacher.birthDate;
        await teacher.save();
        return res.status(200).json({ message: 'Professor atualizado com sucesso', teacher });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
