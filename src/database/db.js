import { Sequelize } from 'sequelize'
import 'dotenv/config'

const database = new Sequelize(
  process.env.DATABASE_URL,
  { dialect: 'postgres' }
)

const tryConnect = async () => {
  try {
    await database.authenticate()
    console.log('Conexão bem-sucedida')
  } catch (error) {
    console.error('Erro de conexão: ', error)
  }
}

export { tryConnect }