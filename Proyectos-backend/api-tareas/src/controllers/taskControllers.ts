import { Request, Response } from 'express'
import { TaskModel } from '../models/localHost/taskLocalModels'
import task from '../routes/task'
import { validatePartialtask, validateTask } from '../validation/taskValidation'

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

  public create (req: Request, res: Response): void {
    try {
      const taskEntry = validateTask(req.body)
      if (taskEntry.success !== true) {
        res.status(400).json({ Error: taskEntry.error })
        return
      }
      const newTask = taskModel.createTask(taskEntry)
      res.status(201).json({ Message: 'Tarea creada con exito', Objeto: newTask })
    } catch (error: any) {
      res.status(500).json({ Error: error })
    }
  }

  public update (req: Request, res: Response): void {
    try {
      const id = +req.params.id
      const validateTask = validatePartialtask(req.body)
      if (validateTask.success !== true) {
        res.status(400).json({ Error: validateTask.error })
        return
      }
      const updateTask = taskModel.updateTask(id, validateTask.data)
      res.status(201).json({ Message: 'Tarea actualizada con exito', NuevoOjeto: updateTask })
    } catch (error) {
      res.status(500).json({ Error: error })
    }
  }
}
