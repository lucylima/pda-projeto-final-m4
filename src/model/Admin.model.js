import { database } from '../database/db.js'
import { DataTypes } from 'sequelize'

const Admin = database.define(
  'Admin',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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
    },
    address: {
      type: DataTypes.STRING
    },
    token: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    }
  },
  {
    timestamps: false
  }
)
export { Admin }