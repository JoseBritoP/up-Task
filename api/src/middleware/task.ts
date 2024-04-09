import type { Request,Response,NextFunction } from "express";
import { getProject } from "../controllers/project";
import { idSchema } from "../schema/project";

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
    const { projectId } = req.params
    const project = await getProject(projectId);
    req.params.projectId = project.id;
    next();
  } catch (error:any) {
    return res.status(404).json({error:error.message});
  }
};

export const checkId = (req:Request,res:Response,next:NextFunction) => {
  try {
    const { id } = req.params;

    const result = idSchema.safeParse(id);
    if(!result.success) throw new Error(JSON.stringify(result.error));
    req.paramsId = result.data
    next();
  } catch (error:any) {
    return res.status(400).json({error:JSON.parse(error.message)})
  }
}