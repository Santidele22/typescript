import taskInfo from '../../data/data.json'
import { NewTask, Task } from '../../types/types'

const data: Task[] = taskInfo as Task[]

export class TaskModel {
  public getAllTask (): Task[] | undefined {
    try {
      if (data !== null) {
        return data
      }
      throw new Error('No se encontro ninguna tarea')
    } catch (error: unknown) {
      const errorMessage: string = error as string
      throw new Error(errorMessage)
    }
  }

  public getTaskByName (name: string): Task[] | undefined {
    try {
      const task: Task[] = data.filter(task => task.author.toLowerCase().includes(name.toLowerCase()))

      return task
    } catch (error) {
      const errorMessage: string = error as string
      throw new Error(errorMessage)
    }
  }

  public getTaskById (id: number): Task | undefined {
    try {
      const task = data.find(task => task.id === id)

      return task
    } catch (error) {
      const errorMessage: string = error as string
      throw new Error(errorMessage)
    }
  }

  public deleteTask (id: number): Task[] | undefined {
    try {
      const index = data.findIndex(task => task.id === id)
      let deletedTask
      if (index !== -1) {
        deletedTask = data.splice(index, 1)
      }
      return deletedTask
    } catch (error) {
      const errorMessage: string = error as string
      throw new Error(errorMessage)
    }
  }

  public createTask (newTaskEntry: NewTask): Task {
    const newTask: Task = {
      id: Math.max(...data.map(d => d.id)) + 1,
      ...newTaskEntry
    }
    data.push(newTask)
    return newTask
  }

  public updateTask (id: number, body: Task): Task[] {
    const index = data.findIndex(obj => obj.id === id)
    if (index === -1) {
      throw new Error('No se encontro ninguna tarea con ese id')
    }
    const updateTask = data.map(obj => {
      if (obj.id === id) {
        return {
          ...obj,
          ...body
        }
      }
      return obj
    })
    return updateTask
  }
}
