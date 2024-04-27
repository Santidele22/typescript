export interface Task {
  id: number
  author: string
  date: string
  task: string
  done: boolean
}
export type NewTask = Omit<Task, 'id'>
