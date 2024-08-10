import { DataTypes } from 'sequelize'
import { database } from '../database/db.js'
import { Jobs } from './job.models.js'

const Company = database.define(
  'Company',
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
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  },
  {
    timestamps: false
  }
)

export { Company }