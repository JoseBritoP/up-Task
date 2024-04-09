import Task from "../../models/Task";
import Project from "../../models/Project";

export const deleteTask = async (id:string) => {

  const task = await Task.findOne({
    _id:id
  }).populate({
    path:'project',
    select:["_id","name","description"]
  });


  if(!task) throw new Error(`Task not found`);
  // const proyect = task.proyect

  const project = await Project.findOne({
    _id:task.project?._id
  })
  if(!project) throw new Error(`Proyect not found`);
  project.tasks = project.tasks.filter((task)=>task.id !== id)
  await project.save();

  const deletedTask = await task.deleteOne();
  return deletedTask;
};