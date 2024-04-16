import { Router } from "express";

export const noteRouter = Router();

// Middleware
import { authenticate } from "../middleware/auth";
import { NoteHandler } from "../handlers/note/Note";

// Endpoints

noteRouter.use(authenticate)
noteRouter.get('/:taskId/notes',NoteHandler.GET)
noteRouter.get('/:taskId/notes/:noteId',NoteHandler.GETBYID)
noteRouter.post('/:taskId/notes',NoteHandler.POST)
noteRouter.put('/:taskId/notes/:noteId',NoteHandler.PUT)
noteRouter.patch('/:taskId/notes/:noteId',NoteHandler.PATCH)
noteRouter.delete('/:taskId/notes/:noteId',NoteHandler.DELETE)