import { database } from '../database/db.js'
import { DataTypes } from 'sequelize'
import { Company } from './Company.model.js'

const Jobs = database.define(
  'Jobs',
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
    area: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Company,
        key: 'id'
      }
    }
  },
  {
    timestamps: false
  }
)

export { Jobs }
