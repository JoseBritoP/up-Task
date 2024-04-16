import { Request,Response } from "express";
import { createNote } from "../../controllers/note";

export async function GET (req:Request,res:Response){
  return res.json({DIY:`Get notes`})
}
export async function GETBYID (req:Request,res:Response){
  return res.json({DIY:`Get notes`})
}
export async function POST (req:Request,res:Response){
  const user = req.user;
  const task = req.task
  const { content } = req.body;
  try {
    const newNote = await createNote({content,task,user});
    return res.status(201).json(newNote)
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }
}
export async function PUT (req:Request,res:Response){
  return res.json({DIY:`Get notes`})
}
export async function PATCH (req:Request,res:Response){
  return res.json({DIY:`Get notes`})
}
export async function DELETE (req:Request,res:Response){
  return res.json({DIY:`Get notes`})
}