import express from 'express'
import corsMiddleware from './middleware/cors/corsMiddleware'
import diaries from './routes/diaries'
const app = express()

const PORT = 4000

app.use(express.json())
app.use('/api/diaries', diaries)
app.use(corsMiddleware)

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`)
})
