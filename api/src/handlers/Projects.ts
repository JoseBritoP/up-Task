import type { Request,Response } from "express";

const GET = async (req:Request,res:Response) => {
  res.json({DIY:'Get projects'})
}
const GETBYID = async (req:Request,res:Response) => {
  const { id } = req.params
  res.json({DIY:`GET project ${id}`})
}
const POST = async (req:Request,res:Response) => {
  res.json({DIY:'POST project'})
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