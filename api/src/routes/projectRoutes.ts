import { Router } from "express";
import { ProjectHandler } from "../handlers/Projects";

export const projectRouter = Router();

// Middlewares
import { postProjectCheck,putProjectCheck,checkId } from "../middleware/project";
import { authenticate } from "../middleware/auth";

// Endpoints

projectRouter.use(authenticate);
projectRouter.get('/',ProjectHandler.GET);
projectRouter.post('/',postProjectCheck,ProjectHandler.POST);
projectRouter.get('/:id',checkId,ProjectHandler.GETBYID);
projectRouter.put('/:id',putProjectCheck,ProjectHandler.PUT);
projectRouter.patch('/:id',ProjectHandler.PATCH);
projectRouter.delete('/:id',checkId,ProjectHandler.DELETE);