import { Router } from 'express'
import { TaskController } from '../controllers/taskControllers'
const task = Router()

const controller = new TaskController()

task.get('/', controller.getAll)
task.get('/name', controller.getByName)
task.get('/:id', controller.getById)
task.post('/', controller.create)
task.patch('/:id', controller.update)
task.delete('/:id', controller.delete)

export default task
