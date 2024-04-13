import { Router } from "express";
import { ProjectHandler } from "../handlers/Projects";

export const projectRouter = Router();

// Middlewares
import { postProjectCheck,putProjectCheck,checkId } from "../middleware/project";
import { authenticate } from "../middleware/auth";

// Endpoints

projectRouter.get('/',authenticate,ProjectHandler.GET);
projectRouter.post('/',authenticate,postProjectCheck,ProjectHandler.POST);
projectRouter.get('/:id',checkId,ProjectHandler.GETBYID);
projectRouter.put('/:id',putProjectCheck,ProjectHandler.PUT);
projectRouter.patch('/:id',ProjectHandler.PATCH);
projectRouter.delete('/:id',checkId,ProjectHandler.DELETE);