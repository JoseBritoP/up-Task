import { Router } from "express";
import { TaskHandler } from "../handlers/tasks";

const taskRouter = Router();
// Middleware

import { GetProjectId, postTaskCheck, putTaskCheck } from "../middleware/task";
import { checkId } from "../middleware/task";

// Endpoints

taskRouter.get('/',TaskHandler.GET)
taskRouter.get('/project/:projectId',GetProjectId,TaskHandler.GET)
taskRouter.get('/:id',checkId,TaskHandler.GETBYID)
taskRouter.post('/',postTaskCheck,TaskHandler.POST)
taskRouter.put('/:id',putTaskCheck,TaskHandler.PUT)
taskRouter.patch('/:id',TaskHandler.PATCH)
taskRouter.delete('/:id',checkId,TaskHandler.DELETE)

export default taskRouter