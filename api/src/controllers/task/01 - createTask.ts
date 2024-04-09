import Task from "../../models/Task";
import { taskSchema } from "../../schema/task";
import { getProject } from "../project";

export const createTask = async (data:unknown) => {
  const result = taskSchema.safeParse(data);
  if(!result.success) {
    console.log(result.error)
    throw new Error(JSON.stringify(result.error))
  }

  await getProject(result.data.project);

  const newTask = new Task(result.data);
  const savedTask = await newTask.save();

  return {
    message:'Task was successfully created',
    task:savedTask
  }
};