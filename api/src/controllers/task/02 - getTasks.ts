import Task from "../../models/Task";

export const getTasks = async () => {
  const tasks = await Task.find();
  if(!tasks.length) throw new Error(`No tasks`);

  return tasks
};

export const getTasksInProject = async (projectId:string) => {
  const tasks = await Task.find({
    project:projectId
  })
  .populate('project')
  if(!tasks.length) throw new Error(`No tasks`);
  
  return tasks

}; 