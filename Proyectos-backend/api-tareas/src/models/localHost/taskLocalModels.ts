import taskInfo from '../../data/data.json'
import { Task } from '../../types/types'

const data: Task[] = taskInfo as Task[]
export class TaskModel {
  public getAllTask (name: string): Task[] | undefined {
    try {
      if (name.length < 0) {
        return data.filter(task => task.author === name)
      }
      console.log(data)
      return data
    } catch (error: unknown) {
      const errorMessage: string = error as string
      throw new Error(errorMessage)
    }
  }

  public getOneTask (): void {

  }

  public deleteTask (): void {}
  public updateTask (): void {}
  public createTask (): void {}
}
