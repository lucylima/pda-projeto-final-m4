import { DataTypes } from 'sequelize'
import { database } from '../database/db.js'

const Teacher = database.define(
  'Teacher',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

export { Teacher }