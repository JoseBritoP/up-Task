import type { Request,Response } from "express";
import { createTask,getTask,getTasks,getTasksInProject,updateTask,deleteTask,updateTaskStatus } from "../controllers/task";
import { findTeam, addTeam } from "../controllers/project/team";

// TODO: Middleware here

export const GET = async (req:Request,res:Response) => {
  const { projectId } = req.params;
  try {
    const tasks = projectId !== undefined ? await getTasksInProject(projectId) : await getTasks();
    return res.status(200).json(tasks);
  } catch (error:any) {
    return res.status(404).json({error:error.message})
  }
}

export const GETBYID = async (req:Request,res:Response) => {
  const id = req.paramsId
  try {
    const task = await getTask(id);
    return res.status(200).json(task)
  } catch (error:any) {
    return res.status(404).json({error:error.message})
  }

}

export const FINDTEAM = async (req:Request,res:Response) => {
  const data = req.body;
  try {
    const findMember= await findTeam(data);
    return res.status(201).json(findMember)
  } catch (error:any) {
    return res.status(400).json({error:error.message});
  }
}

export const ADDTEAM = async (req:Request,res:Response) => {
  const { projectId } = req.params;
  const data = req.body;
  try {
    const addTeamMember= await addTeam({projectId,data});
    return res.status(201).json(addTeamMember)
  } catch (error:any) {
    return res.status(400).json({error:error.message});
  }
}



export const PUT = async (req:Request,res:Response) => {
  const data = req.taskUpdateData;
  try {
    const updatedTask = await updateTask(data);
    return res.status(200).json(updatedTask)
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }

}

export const PATCH = async (req:Request,res:Response) => {
  const data = req.taskStatus;
  try {
    const task = await updateTaskStatus(data);
    return res.status(200).json(task)
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }
  
}

export const DELETE = async (req:Request,res:Response) => {
  const id = req.paramsId
  try {
    const taskDeleted = await deleteTask(id);
    return res.status(200).json(taskDeleted);
  } catch (error:any) {
    return res.status(404).json({error:error.message});
  }

}

