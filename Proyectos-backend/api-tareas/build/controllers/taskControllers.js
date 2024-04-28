'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
exports.TaskController = void 0
const taskLocalModels_1 = require('../models/localHost/taskLocalModels')
const task_1 = __importDefault(require('../routes/task'))
const taskValidation_1 = require('../validation/taskValidation')
const taskModel = new taskLocalModels_1.TaskModel()
class TaskController {
  getAll (_req, res) {
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

  getByName (req, res) {
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

  getById (req, res) {
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

  delete (req, res) {
    try {
      const id = +req.params.id
      const taskDeleted = taskModel.deleteTask(id)
      if (task_1.default === undefined) {
        res.status(404).json({ Error: 'No se encontro la tarea' })
        return
      }
      res.json({ Message: 'La tarea eliminada es la de: ', TaskDeleted: taskDeleted })
    } catch (error) {
      res.status(500).json({ Error: error })
    }
  }

  create (req, res) {
    try {
      const taskEntry = (0, taskValidation_1.validateTask)(req.body)
      if (taskEntry.success !== true) {
        res.status(400).json({ Error: taskEntry.error })
        return
      }
      const newTask = taskModel.createTask(taskEntry)
      res.status(201).json({ Message: 'Tarea creada con exito', Objeto: newTask })
    } catch (error) {
      res.status(500).json({ Error: error })
    }
  }

  update () {
  }
}
exports.TaskController = TaskController
