import { TaskStatus } from "../types/task"

export interface CreateTaskProps {
  name:string
  description:string
  project:string
}

export interface UpdateTaskProps {
  id:string
  data:{
    name?:string
    description?:string
    status?:TaskStatus
  }
}

export interface PatchTaskProps {
  id:string,
  data:{
    status:TaskStatus
  }
}