import { DiaryEntry } from "../types/types";
import diaryData from "../data/diaries.json"

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = () => diaries

export const addEntry = () => null