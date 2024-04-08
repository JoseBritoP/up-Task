import Project from "../../models/Project";

export const getProjects = async () => {

  const projects = await Project.find({});

  if(!projects.length) throw new Error(`No projects`)

  return projects
};

export const getProject = async (id:string) => {

  if(/^[0-9]+$/.test(id)) throw new Error('Id invalid')

  const project = await Project.findOne({
    _id:id
  });

  if(!project) throw new Error(`Project not found ${id}`)
  
  return project
}