import Task from "../../models/Task";
import { UpdateTaskProps } from "../../typescript/interfaces/task";

export const updateTask = async ({id,data}:UpdateTaskProps) => {

  const taskUpdate = await Task.findByIdAndUpdate(id,data,{new:true})

  if(!taskUpdate) throw new Error(`Error updating the task ${id}`);
  
  const savedTask = await taskUpdate.save();
  return {
    message:'The task was successfully updated!',
    task:savedTask
  }
};