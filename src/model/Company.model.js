import { DataTypes } from 'sequelize'
import { database } from '../database/db.js'

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
      allowNull: false
    },
    
  },
  {
    timestamps: false
  }
)

export { Company }