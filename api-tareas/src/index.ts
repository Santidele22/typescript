import express, { Request, Response } from 'express'
import corsMiddleware from './middleware/cors'
import task from './routes/task'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())
app.use(corsMiddleware)
app.use('/task', task)
app.get('/', (_request: Request, response: Response) => {
  response.status(200).send('Hello World')
})
app.listen(PORT, () => {
  console.log(`Server is Fire at http://localhost:${PORT}`)
})