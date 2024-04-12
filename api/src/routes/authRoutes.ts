import { Router } from "express";
import { AuthHandler } from "../handlers/Auth";
import { createAccountMiddleware } from "../middleware/auth";
// Handlers

export const authRouter = Router();

// Middleware


// Endpoints

authRouter.get('/',AuthHandler.GET);
authRouter.post('/create-account',createAccountMiddleware,AuthHandler.POSTACCOUNT);
authRouter.get('/confirm-account/:token',AuthHandler.CONFIRMACCOUNT);
authRouter.get('/:id',AuthHandler.GETBYID);
authRouter.patch('/:id',AuthHandler.PATCH);
authRouter.delete('/:id',AuthHandler.DELETE);