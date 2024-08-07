import { database } from '../database/db.js'
import { DataTypes } from 'sequelize'

const Class = database.define(
  'Class',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    capacity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    course: {
      type: DataTypes.STRING,
      allowNull: false
    },
    teacher: {
      type: DataTypes.STRING,
      allowNull: false
    }
    //! Fazer chave estrangeira dos alunos
  },
  {
    timestamps: false
  }
)

export { Class }
