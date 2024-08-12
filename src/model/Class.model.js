import { database } from '../database/db.js'
import { Teacher } from './Teacher.model.js'
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
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: Teacher,
        key: 'id'
      }
    }
  },
  {
    timestamps: false
  }
)

export { Class }
