import diaryData from '../data/diaries.json'
import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types/types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithSensitiveComments = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}
export const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find(diary => diary.id === id)
  return entry
}
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}
