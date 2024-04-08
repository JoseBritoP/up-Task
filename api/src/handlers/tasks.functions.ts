import type { Request,Response } from "express";

export const GET = async (req:Request,res:Response) => {
  // try {
  //   const projects = await getProjects();
  //   return res.status(200).json(projects);
  // } catch (error:any) {
  //   return res.status(404).json({error:error.message})
  // }
  return res.json({DIY:'Get tasks'})
}

export const GETBYID = async (req:Request,res:Response) => {
  const { id } = req.params
  // try {
  //   const project = await getProject(id);
  //   return res.status(200).json(project)
  // } catch (error:any) {
  //   return res.status(404).json({error:error.message})
  // }
  return res.json({DIY:`Get Task ${id}`})

}

export const POST = async (req:Request,res:Response) => {
  const data = req.body;
  // try {
  //   const newProject = await createProject(data);
  //   return res.status(201).json(newProject)
  // } catch (error:any) {
  //   return res.status(400).json({error:JSON.parse(error.message)})
  // }
  return res.json({DIY:'Post task'})

}

export const PUT = async (req:Request,res:Response) => {
  const { id } = req.params
  // const data = req.body
  // try {
  //   const projectUpdated = await updateProject(id,data);
  //   return res.status(200).json(projectUpdated)
  // } catch (error:any) {
  //   return res.status(400).json({error:JSON.parse(error.message)})
  // }
  return res.json({DIY:`PUT Task ${id}`})

}

export const PATCH = async (req:Request,res:Response) => {
  const { id } = req.params
  
  return res.json({DIY:`Patch Task ${id}`})
}

export const DELETE = async (req:Request,res:Response) => {
  const { id } = req.params
  // try {
  //   const projectDeleted = await deleteProject(id);
  //   return res.status(200).json(projectDeleted);
  // } catch (error:any) {
  //   return res.status(404).json({error:error.message});
  // }
  return res.json({DIY:`DELETE Task ${id}`})

}

