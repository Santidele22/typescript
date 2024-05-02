
import mongoose, { Document, Schema } from 'mongoose'
import { Task } from '../types/types'
const taskSchema: Schema = new Schema<Task>({
  author: { type: String, required: true },
  date: { type: String, required: true },
  task: { type: String, required: true },
  done: { type: Boolean, required: true }
})

const TaskModel = mongoose.model<Document>('Task', taskSchema)

export default TaskModel
