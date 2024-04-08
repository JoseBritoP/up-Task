import Project from "../../models/Project";
import { CreateProjectProps } from "../../typescript/interfaces/project";

export const createProject = async (data:CreateProjectProps) => {
  const { clientName, description, projectName } = data;
  
  const newProject = new Project({
    projectName,
    clientName,
    description
  })

  const savedProject = await newProject.save();

  return {
    message:'Project was successfully created',  
    savedProject
  }
};