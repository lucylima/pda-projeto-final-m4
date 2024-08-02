import { Sequelize } from 'sequelize'
import 'dotenv/config'

const database = new Sequelize(
  process.env.DATABASE_URL,
  { dialect: 'postgres' }
)

const tryConnectSequelize = async () => {
  try {
    await database.authenticate()
    console.log('Conexão bem-sucedida')
  } catch (error) {
    console.error('Erro de conexão: ', error)
  }
}

export { tryConnectSequelize, database }