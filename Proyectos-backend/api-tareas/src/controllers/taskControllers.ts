import { Request, Response } from 'express'
import { TaskModel } from '../models/localHost/taskLocalModels'
import task from '../routes/task'

const taskModel = new TaskModel()

export class TaskController {
  public getAll (_req: Request, res: Response): void {
    try {
      const task = taskModel.getAllTask()
      if (task !== null) {
        res.json(task)
        return
      }
      res.status(404).json({ Error: 'No se encontro ninguna tarea' })
    } catch (error) {
      res.status(500).json({ Error: error })
    }
  }

  public getByName (req: Request, res: Response): void {
    try {
      const { author } = req.query
      if (typeof author === 'string') {
        const task = taskModel.getTaskByName(author)
        if (task === undefined) {
          res.status(404).json({ Error: 'No se encontro ninguna tarea' })
        }
        res.json(task)
      }
    } catch (error) {
      res.status(500).json({ Error: error })
    }
  }

  public getById (req: Request, res: Response): void {
    try {
      const id = +req.params.id
      const task = taskModel.getTaskById(id)
      if (task === undefined) {
        res.status(404).json({ Error: 'Tarea no encontrada' })
        return
      }
      res.json(task)
    } catch (error) {
      res.status(500).json({ Error: error })
    }
  }

  public delete (req: Request, res: Response): void {
    try {
      const id = +req.params.id
      const taskDeleted = taskModel.deleteTask(id)
      if (task === undefined) {
        res.status(404).json({ Error: 'No se encontro la tarea' })
        return
      }
      res.json({ Message: 'La tarea eliminada es la de: ', TaskDeleted: taskDeleted })
    } catch (error) {
      res.status(500).json({ Error: error })
    }
  }

  public create (): void {

  }

  public update (): void {

  }
}
