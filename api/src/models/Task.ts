import mongoose, { Schema, Types } from "mongoose";
import { TaskType, taskStatus } from "../typescript/types/task";


export const TaskSchema:Schema = new Schema({
  name:{
    type:String,
    trim:true,
    required:true
  },
  description:{
    type:String,
    trim:true,
    required:true
  },
  project:{
    type:Types.ObjectId,
    ref:'Project'
  },
  status:{
    type:String,
    enum:Object.values(taskStatus),
    default:taskStatus.PENDING
  }
},{ timestamps:true }
)

const Task = mongoose.model<TaskType>('Task',TaskSchema);

export default Task