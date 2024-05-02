export interface Task {
  id: IdFormatted
  author: stringcls
  date: DateFormatted
  task: string
  done: boolean
}
export type NewTask = Omit<Task, 'id'>
export type DateFormatted = `${string}-${string}-${string}`
export type IdFormatted = `${string}-${string}-${string}-${string}-${string}`
