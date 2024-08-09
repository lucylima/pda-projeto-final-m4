import { database } from '../database/db.js'
import { DataTypes } from 'sequelize'

const Questionary = database.define(
    'Questionary',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        course: {
            type: DataTypes.STRING,
            allowNull: false
        },


    }, {
    timestamps: false
})

export { Questionary }

