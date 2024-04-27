import { NewTask } from '../types/types'
import taskValidation from '../validation/taskValidation'
const newTaskEntry = (object: any): NewTask | undefined => {
  try {
    const validatedObject = taskValidation.parse(object)
    const newTask: NewTask = {
      author: validatedObject.author,
      date: validatedObject.date,
      task: validatedObject.task,
      done: validatedObject.done
    }
    return newTask
  } catch (error) {
    const errorMessage: string = error as string
    throw new Error(errorMessage)
  }
}
export default newTaskEntry
