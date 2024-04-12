import type { Request,Response } from "express";
import { confirmAccount, createAccount, loginAccount, requestConfirmationCode,forgotPassword } from "../controllers/auth";

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

export const POSTREGISTER = async (req:Request,res:Response) => {
  const data = req.body
  try {
    const newAccount = await createAccount(data);
    return res.status(201).json(newAccount)
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }
}

export const GETCONFIRMACCOUNT = async (req:Request, res:Response) => {
  const { token } = req.params
  try {
    const accountConfirmed = await confirmAccount(token);
    return res.status(200).json(accountConfirmed)
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }
};

export const POSTLOGIN = async (req:Request,res:Response) => {
  const data = req.body
  try {
    const login = await loginAccount(data);
    return res.status(200).json(login)
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }
}; 

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

export const REQUESTCODE = async (req:Request,res:Response) => {
  const data = req.body
  try {
    const newToken = await requestConfirmationCode(data);
    return res.status(200).json(newToken)
  } catch (error:any) {
    return res.status(403).json({error:error.message})
  }
}

export const FORGETPASSWORD = async (req:Request,res:Response) => {
  const data = req.body
  try {
    const newPassword = await forgotPassword(data);
    return res.status(200).json(newPassword)
  } catch (error:any) {
    return res.status(403).json({error:error.message})
  }
};