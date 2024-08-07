import { database } from '../database/db.js'
import { DataTypes } from 'sequelize'

const Questions = database.define(
  'Questions',
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: true
    },
    response: {
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement: true
    }
  },
  {
    timestamps: false
  })

export { Questions }