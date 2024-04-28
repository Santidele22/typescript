export interface Task {
  id: number
  author: string
  date: DateFormatted
  task: string
  done: boolean
}
export type NewTask = Omit<Task, 'id'>
export type DateFormatted = `${string}-${string}-${string}`
