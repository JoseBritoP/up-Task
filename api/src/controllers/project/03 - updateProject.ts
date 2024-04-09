import Project from "../../models/Project";
import { updateProjectSchema } from "../../schema/project";
import { UpdateProjectProps } from "../../typescript/interfaces/project";

export const updateProject = async ({id,data}:UpdateProjectProps) => {

  const updatedProject = await Project.findByIdAndUpdate(id,data,{new:true})

  if(!updatedProject) throw new Error(`Error updating the project ${id}`);
  
  const savedProject = await updatedProject.save();
  return savedProject
};
