import { Router } from 'express'
import { TaskController } from '../controllers/taskControllers'
const task = Router()
// Instancio la
const controller = new TaskController()

task.get('/', controller.getAll)
task.get('/:id', controller.getOne)
task.post('/', controller.create)
task.delete('/:id', controller.delete)
task.patch('/:id', controller.update)

export default task
