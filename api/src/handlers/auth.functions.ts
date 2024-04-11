import type { Request,Response } from "express";
import { createAccount } from "../controllers/auth";

export const GET = async (req:Request,res:Response) => {
  // try {
  //   const projects = await getProjects();
  //   return res.status(200).json(projects);
  // } catch (error:any) {
  //   return res.status(404).json({error:error.message})
  // }
}

export const GETBYID = async (req:Request,res:Response) => {
  // const id = req.paramsId
  // try {
  //   const project = await getProject(id);
  //   return res.status(200).json(project)
  // } catch (error:any) {
  //   return res.status(404).json({error:error.message})
  // }
}

export const POST = async (req:Request,res:Response) => {
  const data = req.body
  try {
    const newAccount = await createAccount(data);
    return res.status(201).json(newAccount)
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }
}

export const PUT = async (req:Request,res:Response) => {
  // const data = req.updateData;
  // try {
  //   const projectUpdated = await updateProject(data);
  //   return res.status(200).json(projectUpdated)
  // } catch (error:any) {
  //   return res.status(400).json({error:JSON.parse(error.message)})
  // }
}

export const PATCH = async (req:Request,res:Response) => {
  const { id } = req.params
  
  res.json({DIY: `PATCH project ${id}`})
}

export const DELETE = async (req:Request,res:Response) => {
  // const id  = req.paramsId
  // try {
  //   const projectDeleted = await deleteProject(id);
  //   return res.status(200).json(projectDeleted);
  // } catch (error:any) {
  //   return res.status(404).json({error:error.message});
  // }
}