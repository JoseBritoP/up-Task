import { Router } from "express";
import { TaskHandler } from "../handlers/tasks";

const taskRouter = Router();

taskRouter.get('/',TaskHandler.GET)
taskRouter.post('/',TaskHandler.POST)
taskRouter.get('/:id',TaskHandler.GETBYID)
taskRouter.put('/:id',TaskHandler.PUT)
taskRouter.patch('/',TaskHandler.PATCH)
taskRouter.delete('/',TaskHandler.DELETE)

export default taskRouter