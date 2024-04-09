import { Document,Types } from "mongoose";
import { taskStatus } from "../../models/Task";

export type TaskType = Document & {
  name:string
  description:string
  project: Types.ObjectId
}

export type TaskStatus = typeof taskStatus[keyof typeof taskStatus]