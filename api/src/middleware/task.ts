import type { Request,Response,NextFunction } from "express";
import { getProject } from "../controllers/project";

declare global {
  namespace Express {
    interface Request {
      params:{
        projectId:string
      }
    }
  }
}

export const GetProjectId = async (req:Request,res:Response,next:NextFunction) => {
  try {
    // console.log(req.params.projectId)
    const { projectId } = req.params
    const project = await getProject(projectId);
    req.params.projectId = project.id;
    next();
  } catch (error:any) {
    return res.status(404).json({error:error.message});
  }
};