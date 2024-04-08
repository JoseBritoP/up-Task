import { Router } from "express";
import { ProjectHandler } from "../handlers/Projects";

export const projectRouter = Router();

// Endpoints

projectRouter.get('/',ProjectHandler.GET);
projectRouter.post('/',ProjectHandler.POST);
projectRouter.get('/:id',ProjectHandler.GETBYID);
projectRouter.put('/:id',ProjectHandler.PUT);
projectRouter.patch('/:id',ProjectHandler.PATCH);
projectRouter.delete('/:id',ProjectHandler.DELETE);