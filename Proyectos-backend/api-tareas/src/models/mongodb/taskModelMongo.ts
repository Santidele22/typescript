import { Document } from 'mongoose'
import TaskModel from '../../schemas/mongoSchemas'
import { NewTask, Task } from '../../types/types'
export class TaskModelMongo {
  public async getAllTask (): Promise<Task[]> {
    try {
      const allTasks: Document[] = await TaskModel.find().exec()
      if (allTasks.length === 0) {
        throw new Error('No hay ninguna tarea creada')
      }
      return allTasks.map(task => task.toObject() as Task)
    } catch (error) {
      const errorMsg = error as string
      throw new Error(errorMsg)
    }
  }

  public async getTaskByName (name: string): Promise<Task[] | null> {
    try {
      const task = await TaskModel.find({ author: { $regex: new RegExp(name, 'i') } }).exec()
      if (task.length <= 0) {
        throw new Error('No hay ninguna tarea con ese nombre')
      }
      return task.map(task => task.toObject() as Task)
    } catch (error) {
      const errorMsg = error as string
      throw new Error(errorMsg)
    }
  }

  public async getTaskById (id: string): Promise<Task | undefined> {
    try {
      const task: Document | null = await TaskModel.findById(id).exec()

      if (task === null) throw new Error('No hay ninguna tarea con ese id')

      return task.toObject() as Task
    } catch (error) {
      const errorMsg = error as string
      throw new Error(errorMsg)
    }
  }

  public async deleteTask (id: string): Promise<Task | undefined> {
    try {
      const task: Document | null = await TaskModel.findByIdAndDelete(id).exec()
      if (task === null) {
        throw new Error('No se encontro ninguna tarea con ese id')
      }
      return task.toObject() as Task
    } catch (error) {
      const errorMsg = error as string
      throw new Error(errorMsg)
    }
  }

  public async createTask (newTaskEntry: NewTask): Promise<Task> {
    try {
      console.log('Esto es lo que llega por newTaskEntry', newTaskEntry)
      const task: Document = await TaskModel.create(newTaskEntry)
      console.log('Task from model', task)
      return task.toObject() as Task
    } catch (error) {
      const errorMsg = error as string
      throw new Error(errorMsg)
    }
  }

  public async updateTask (id: string, body: Task): Promise<Task | null> {
    try {
      const task: Document | null = await TaskModel.findByIdAndUpdate(id, body)
      if (task === null) {
        throw new Error('No se encontro ninguna tarea para actualizar')
      }
      return task.toObject() as Task
    } catch (error) {
      const errorMsg = error as string
      throw new Error(errorMsg)
    }
  }
}
