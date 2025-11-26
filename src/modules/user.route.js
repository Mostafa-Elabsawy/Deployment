import { Router } from "express";
import * as userController from "./user.controller.js";
const userRouter = Router();
userRouter.get("/", userController.getAllUsers);
userRouter.post("/", userController.addUser);
export { userRouter };