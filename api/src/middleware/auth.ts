import type { Request,Response,NextFunction } from "express";
import { AuthAccount, authLoginSchema, authSchema } from "../schema/auth";
declare global {
  namespace Express {
    interface Request {
      body:AuthAccount
    }
  }
}

export const createAccountMiddleware = (req:Request,res:Response,next:NextFunction) => {
  try {
    const body = req.body;
    const result = authSchema.safeParse(body);
    if(!result.success) throw new Error(JSON.stringify(result.error))
    req.body = result.data
    next();
  } catch (error:any) {
    return res.status(400).json({error:JSON.parse(error.message)})
  }
};

export const authLoginMiddleware = (req:Request,res:Response,next:NextFunction) => {
  try {
    const body = req.body;
    const result = authLoginSchema.safeParse(body);
    if(!result.success) throw new Error(JSON.stringify(result.error));
    req.body=result.data;
    next();
  } catch (error:any) {
    return res.status(400).json({error:JSON.parse(error.message)})
  }
}