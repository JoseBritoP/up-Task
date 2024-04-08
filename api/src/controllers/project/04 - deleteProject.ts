import Project from "../../models/Project";
import { idSchema } from "../../schema/project";

export const deleteProject = async (id:string) => {
  const result = idSchema.safeParse(id);
  if(!result.success) throw new Error(`ID invalid`);

  const projectDeleted = await Project.findById(id);

  if(!projectDeleted) throw new Error(`Project not found`)
  await projectDeleted.deleteOne();

  return {
    message:'Project was deleted successfully',
    projectDeleted
  };
};