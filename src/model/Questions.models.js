import { database } from '../database/db.js'
import { DataTypes } from 'sequelize'
import { Questionary } from './Questionary.model.js'

const Questions = database.define(
  'Questions',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    questions: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    answers: {
      type: DataTypes.STRING,
      allowNull: false,
      autoIncrement: true
    },
    questionary_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Questionary,
        key: 'id'
      }
    }
  },
  {
    timestamps: false
  }
)

export { Questions }
