import Project from "../../models/Project";
import { projectSchema } from "../../schema/project";
import { CreateProjectProps } from "../../typescript/interfaces/project";

export const createProject = async (data:CreateProjectProps) => {

  const result = projectSchema.safeParse(data);

  if(!result.success) throw new Error(JSON.stringify(result.error))

  const { clientName, description, projectName } = result.data;
  
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