import { Request, Response } from 'express'
import { TaskModel } from '../models/localHost/taskLocalModels'

const taskModel = new TaskModel()

export class TaskController {
  public getAll (req: Request, res: Response): void {
    try {
      const { name } = req.query

      if (typeof name === 'string') {
        const task = taskModel.getAllTask(name)
        if (task !== null) {
          res.json(task)
        }
      }
      res.status(404).json({ Error: 'No se encontro ninguna tarea' })
    } catch (error) {
      res.status(500).json({ Error: error })
    }
  }

  public getOne (): void {

  }

  public delete (): void {

  }

  public create (): void {

  }

  public update (): void {

  }
}
