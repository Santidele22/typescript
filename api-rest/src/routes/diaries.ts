import { Router } from 'express'
import { addDiary, findById, getEntries, getEntriesWithSensitiveComments } from '../services/diaryServices'

const diaries = Router()

// Obtener entradas con comentarios sensibles
diaries.get('/sensitiveEntries', (_req, res) => {
  try {
    const diaries = getEntriesWithSensitiveComments()
    if (diaries.length === 0) {
      res.sendStatus(404).json({ Error: 'diaries not found' })
    }
    res.send(diaries)
  } catch (error) {
    console.error(error)
  }
})
// Obtener todas las entradas o una entrada por ID
diaries.get('/:id', (req, res) => {
  try {
    const id = +req.params.id
    const diary = findById(id)
    if (diary === undefined) {
      res.sendStatus(404).json({ Error: 'Diary not found' })
    }
    res.send(diary)
  } catch (error) {
    console.error(error)
  }
})
diaries.get('/', (_req, res) => {
  try {
    const diaries = getEntries()
    if (diaries.length === 0) {
      res.sendStatus(404).json({ Error: 'diaries not found' })
    }
    res.send(diaries)
  } catch (error) {
    console.error(error)
  }
})

diaries.post('/', (req, res) => {
  try {
    const { date, weather, visibility, comment } = req.body
    const newDiaryEntry = addDiary({ date, weather, visibility, comment })
    res.send(newDiaryEntry)
  } catch (error) {
    console.error(error)
    res.sendStatus(500).json({ Error: error })
  }
})

export default diaries
