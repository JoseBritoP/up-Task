import { Router } from "express";
import { ProjectHandler } from "../handlers/Projects";

export const projectRouter = Router();

// Middlewares
import { postProjectCheck,putProjectCheck } from "../middleware/project";

// Endpoints

projectRouter.get('/',ProjectHandler.GET);
projectRouter.post('/',postProjectCheck,ProjectHandler.POST);
projectRouter.get('/:id',ProjectHandler.GETBYID);
projectRouter.put('/:id',putProjectCheck,ProjectHandler.PUT);
projectRouter.patch('/:id',ProjectHandler.PATCH);
projectRouter.delete('/:id',ProjectHandler.DELETE);