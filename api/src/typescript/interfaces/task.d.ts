import { TaskStatus } from "../types/task"

export interface CreateTaskProps {
  name:string
  description:string
  projectId:string
}

export interface UpdateTaskProps {
  id:string
  data:{
    name?:string
    description?:string
    status?:TaskStatus
  }
}