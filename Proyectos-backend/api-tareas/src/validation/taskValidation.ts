import { z } from 'zod'
import { DateFormatted, NewTask } from '../types/types'

const taskSchema = z.object({
  author: z.string().max(50),
  date: z.string().transform(value => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    if (!dateRegex.test(value)) {
      throw new Error('La fecha debe estar en el formato YYYY-MM-DD')
    }
    return value as DateFormatted
  }),
  task: z.string().max(100),
  done: z.boolean()
})
function validateTask (input: NewTask): any {
  return taskSchema.safeParse(input)
}
function validatePartialtask (input: NewTask): any {
  return taskSchema.partial().safeParse(input)
}
export { validatePartialtask, validateTask }

