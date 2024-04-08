import Project from "../../models/Project";
import { updateProjectSchema } from "../../schema/project";

export const updateProject = async (id:string,data:any) => {

  const result = updateProjectSchema.safeParse({id,data})
  if(!result.success) throw new Error(JSON.stringify(result.error))

  const updatedProject = await Project.findByIdAndUpdate(result.data.id,result.data.data,{new:true})

  if(!updatedProject) throw new Error(`Error updating the project ${id}`);
  
  const savedProject = await updatedProject.save();
  return savedProject
};
