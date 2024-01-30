import express, { Router } from 'express';
import { userController } from '../controllers/user.controller';

export const userRouter = Router();

userRouter.get('/:userId', userController.getOne);
userRouter.get('/', userController.getAll);
userRouter.post('/', express.json(), userController.create);
