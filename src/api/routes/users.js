import { Router } from 'express';

import userController from '../controllers/userController';

const userRouter = Router();

userRouter.post('/', userController.create);
userRouter.get('/', userController.list);
userRouter.get('/:id', userController.findById);

export default userRouter;
