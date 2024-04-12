import { Router } from "express";
import { AuthHandler } from "../handlers/Auth";
// Handlers

export const authRouter = Router();

// Middleware
import { createAccountMiddleware,authLoginMiddleware } from "../middleware/auth";


// Endpoints

authRouter.get('/',AuthHandler.GET);
authRouter.get('/confirm-account/:token',AuthHandler.GETCONFIRMACCOUNT);
authRouter.post('/create-account',createAccountMiddleware,AuthHandler.POSTREGISTER);
authRouter.post('/login',authLoginMiddleware,AuthHandler.POSTLOGIN);
authRouter.post('/request-code',AuthHandler.REQUESTCODE);
authRouter.post('/forgot-password',AuthHandler.FORGETPASSWORD)
authRouter.patch('/:id',AuthHandler.PATCH);
authRouter.delete('/:id',AuthHandler.DELETE);