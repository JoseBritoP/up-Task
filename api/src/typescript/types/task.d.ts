import { Document,Types } from "mongoose";
import { taskStatus } from "../../models/Task";

export type TaskStatus = typeof taskStatus[keyof typeof taskStatus]
export type TaskType = Document & {
  name:string
  description:string
  project: Types.ObjectId,
  status:TaskStatus,
  completedBy:Types.ObjectId | null
}
