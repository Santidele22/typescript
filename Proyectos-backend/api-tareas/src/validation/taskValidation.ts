import { z } from 'zod'

const taskValidation = z.object({
  author: z.string().max(50),
  date: z.string().date().min(new Date('1950-01-01'), { message: 'Too old' }).max(new Date(), { message: 'Too young!' }),
  task: z.string().max(100),
  done: z.boolean()
})
export default taskValidation
