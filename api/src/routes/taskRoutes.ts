import { Router } from "express";
import { TaskHandler } from "../handlers/tasks";

const taskRouter = Router();
// Middleware

import { GetProjectId } from "../middleware/task";

// Endpoints

taskRouter.get('/',TaskHandler.GET)
taskRouter.get('/:projectId',GetProjectId,TaskHandler.GET)
taskRouter.post('/',TaskHandler.POST)
taskRouter.get('/:id',TaskHandler.GETBYID)
taskRouter.put('/:id',TaskHandler.PUT)
taskRouter.patch('/',TaskHandler.PATCH)
taskRouter.delete('/',TaskHandler.DELETE)

export default taskRouter