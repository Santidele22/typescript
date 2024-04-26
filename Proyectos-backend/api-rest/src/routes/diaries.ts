import { Router } from 'express'
import { addDiary, findById, getEntries, getEntriesWithSensitiveComments } from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const diaries = Router()

// Obtener entradas con comentarios sensibles
diaries.get('/sensitiveEntries', (_req, res) => {
  try {
    const diaries = getEntriesWithSensitiveComments()
    if (diaries.length === 0) {
      res.status(404).json({ Error: 'diaries not found' })
    }
    res.send(diaries)
  } catch (error) {
    console.error(error)
    res.status(500).json({ Error: error })
  }
})
// Obtener todas las entradas o una entrada por ID
diaries.get('/:id', (req, res) => {
  try {
    const id = +req.params.id
    const diary = findById(id)
    if (diary === undefined) {
      res.status(404).json({ Error: 'Diary not found' })
    }
    res.send(diary)
  } catch (error) {
    console.error(error)
    res.status(500).json({ Error: error })
  }
})
diaries.get('/', (_req, res) => {
  try {
    const diaries = getEntries()
    if (diaries.length === 0) {
      res.status(404).json({ Error: 'diaries not found' })
    }
    res.send(diaries)
  } catch (error) {
    console.error(error)
    res.status(500).json({ Error: error })
  }
})

diaries.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (e: any) {
    console.error(e)
    res.status(400).send(e.message)
  }
})

export default diaries
