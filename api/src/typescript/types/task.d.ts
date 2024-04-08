import { Document,Types } from "mongoose";


export type TaskType = Document & {
  name:string
  description:string
  project: Types.ObjectId
}

const taskStatus = {
  PENDING :'pending',
  ON_HOLD :'onHold',
  IN_PROGRESS:'inProgress',
  UNDER_REVIEW:'underReview',
  COMPLETED:'completed'
} as const

export type TaskStatus = typeof taskStatus[keyof typeof taskStatus]