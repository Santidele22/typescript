import { config } from 'dotenv'
import mongoose from 'mongoose'
config()
const { MONGODB_NAME, MONGODB_PASSWORD } = process.env

const mongoDbName = MONGODB_NAME as string
const mongoDbPassword = MONGODB_PASSWORD as string
const connectionString = `mongodb+srv://${mongoDbName}:${mongoDbPassword}@cluster0.c2dqikb.mongodb.net/`

const mongodbConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(connectionString)
    console.log('Conectado con exito')
  } catch (error) {
    const msgError = error as string
    console.error(msgError)
    throw new Error(msgError)
  }
}

export default mongodbConnection
