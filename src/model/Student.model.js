import { database } from "../database/db.js";
import { DataTypes } from "sequelize";


const Student = database.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      nis: {
        type: DataTypes.STRING,
        allowNull: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      familyIncome: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      class:{
        type: DataTypes.STRING,
        allowNull: false
      },
      course:{
        type: DataTypes.STRING,
        allowNull: true
      },
      token: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      }

})

export { Student }