import Task from "../../models/Task";
import { PatchTaskProps, UpdateTaskProps } from "../../typescript/interfaces/task";

export const updateTask = async ({id,data}:UpdateTaskProps) => {

  const taskUpdate = await Task.findByIdAndUpdate(id,data,{new:true})

  if(!taskUpdate) throw new Error(`Error updating the task ${id}`);
  
  const savedTask = await taskUpdate.save();
  return {
    message:'The task was successfully updated!',
    task:savedTask
  }
};

export const updateTaskStatus = async({id,data}:PatchTaskProps) => {

  const task = await Task.findByIdAndUpdate(id,data,{new:true})
  
  if(!task) throw new Error(`An error ocurred updating the status of the task`);

  await task.save();

  return {
    message:'The status was successfully updated!',
    task
  }
};