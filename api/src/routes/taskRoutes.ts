import { Router } from "express";
import { TaskHandler } from "../handlers/tasks";

const taskRouter = Router();
// Middleware

import { GetProjectId } from "../middleware/task";

// Endpoints

taskRouter.get('/',TaskHandler.GET)
taskRouter.get('/project/:projectId',GetProjectId,TaskHandler.GET)
taskRouter.get('/:id',TaskHandler.GETBYID)
taskRouter.post('/',TaskHandler.POST)
taskRouter.put('/:id',TaskHandler.PUT)
taskRouter.patch('/',TaskHandler.PATCH)
taskRouter.delete('/',TaskHandler.DELETE)

export default taskRouter