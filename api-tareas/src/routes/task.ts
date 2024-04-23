import { Router } from 'express'
import { TaskController } from '../controllers/taskControllers'
const task = Router()

task.get('/', TaskController.getAll)
task.get('/:id', TaskController.getOne)
task.post('/', TaskController.create)
task.delete('/:id', TaskController.delete)
task.patch('/:id', TaskController.update)

export default task
