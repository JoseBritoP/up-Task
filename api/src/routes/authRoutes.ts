import { Router } from "express";
import { AuthHandler } from "../handlers/Auth";
import { createAccountMiddleware } from "../middleware/auth";
// Handlers

export const authRouter = Router();

// Middleware


// Endpoints

authRouter.get('/',AuthHandler.GET);
authRouter.post('/create-account',createAccountMiddleware,AuthHandler.POST);
authRouter.get('/:id',AuthHandler.GETBYID);
authRouter.put('/:id',AuthHandler.PUT);
authRouter.patch('/:id',AuthHandler.PATCH);
authRouter.delete('/:id',AuthHandler.DELETE);