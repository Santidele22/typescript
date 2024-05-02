import express from 'express'
import mongodbConnection from './database/mongodb'
import corsMiddleware from './middleware/cors'
import task from './routes/task'
const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())
app.use(corsMiddleware)
app.use('/task', task)

const startServer = async (): Promise<void> => {
  try {
    await mongodbConnection()
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

startServer().catch((error) => {
  console.error('Failed to start the server:', error)
})
