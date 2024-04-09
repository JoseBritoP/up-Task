import { Router } from "express";
import { ProjectHandler } from "../handlers/Projects";

export const projectRouter = Router();

// Middlewares
import { postProjectCheck } from "../middleware/project";

// Endpoints

projectRouter.get('/',ProjectHandler.GET);
projectRouter.post('/',postProjectCheck,ProjectHandler.POST);
projectRouter.get('/:id',ProjectHandler.GETBYID);
projectRouter.put('/:id',ProjectHandler.PUT);
projectRouter.patch('/:id',ProjectHandler.PATCH);
projectRouter.delete('/:id',ProjectHandler.DELETE);