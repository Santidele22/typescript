import { Request, Response } from 'express'
// import { TaskModel } from '../models/localHost/taskLocalModels'
import { TaskModelMongo } from '../models/mongodb/taskModelMongo'
import task from '../routes/task'
import { validatePartialtask, validateTask } from '../validation/taskValidation'

const taskModel = new TaskModelMongo()

export class TaskController {
  public async getAll (_req: Request, res: Response): Promise<void> {
    try {
      const task = await taskModel.getAllTask()
      if (task !== null) {
        res.json(task)
        return
      }
      res.status(404).json({ Error: 'No se encontro ninguna tarea' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ Error: error })
    }
  }

  public async getByName (req: Request, res: Response): Promise<void> {
    try {
      const { author } = req.query
      if (typeof author === 'string') {
        const task = await taskModel.getTaskByName(author)
        if (task === undefined) {
          res.status(404).json({ Error: 'No se encontro ninguna tarea' })
        }
        res.json(task)
      }
    } catch (error) {
      res.status(500).json({ Error: error })
    }
  }

  public async getById (req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id
      const task = await taskModel.getTaskById(id)
      if (task === undefined) {
        res.status(404).json({ Error: 'Tarea no encontrada' })
        return
      }
      res.json(task)
    } catch (error) {
      res.status(500).json({ Error: error })
    }
  }

  public async delete (req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id
      const taskDeleted = await taskModel.deleteTask(id)
      if (task === undefined) {
        res.status(404).json({ Error: 'No se encontro la tarea' })
        return
      }
      res.json({ Message: 'La tarea eliminada es la de: ', TaskDeleted: taskDeleted })
    } catch (error) {
      res.status(500).json({ Error: error })
    }
  }

  public async create (req: Request, res: Response): Promise<void> {
    try {
      const taskEntry = validateTask(req.body)

      if (taskEntry.success !== true) {
        res.status(400).json({ Error: taskEntry.error })
      }
      const newTask = await taskModel.createTask(taskEntry.data)
      res.status(201).json({ Message: 'Tarea creada con exito', Objeto: newTask })
    } catch (error: any) {
      console.log(error)
      res.status(500).json({ Error: error })
    }
  }

  public async update (req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id
      const validateTask = validatePartialtask(req.body)
      if (validateTask.success !== true) {
        res.status(400).json({ Error: validateTask.error })
        return
      }
      const updateTask = await taskModel.updateTask(id, validateTask.data)

      res.status(201).json({ Message: 'Tarea actualizada con exito', NuevoOjeto: updateTask })
    } catch (error) {
      res.status(500).json({ Error: error })
    }
  }
}
