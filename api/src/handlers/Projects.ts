import type { Request,Response } from "express";
import { createProject,getProject,getProjects } from "../controllers/project";

const GET = async (req:Request,res:Response) => {
  try {
    const projects = await getProjects();
    return res.status(200).json(projects);
  } catch (error:any) {
    return res.status(404).json({error:error.message})
  }
}

const GETBYID = async (req:Request,res:Response) => {
  const { id } = req.params
  try {
    const project = await getProject(id);
    return res.status(200).json(project)
  } catch (error:any) {
    return res.status(404).json({error:error.message})
  }
}

const POST = async (req:Request,res:Response) => {
  const data = req.body;
  try {
    const newProject = await createProject(data);
    return res.status(201).json(newProject)
  } catch (error:any) {
    return res.status(400).json({error:JSON.parse(error.message)})
  }
}
const PUT = async (req:Request,res:Response) => {
  const { id } = req.params
  
  res.json({DIY: `PUT project ${id}`})
}
const PATCH = async (req:Request,res:Response) => {
  const { id } = req.params
  
  res.json({DIY: `PATCH project ${id}`})
}

const DELETE = async (req:Request,res:Response) => {
  const { id } = req.params
  res.json({DIY: `DELETE project ${id}`})
}

export class ProjectHandler {
  static GET = GET
  static GETBYID = GETBYID
  static POST = POST
  static PUT = PUT
  static PATCH = PATCH
  static DELETE = DELETE
}