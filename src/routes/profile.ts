import { Router } from "express";
import { usersController } from "../controllers/profile";
import { ctrlWrapper } from "../middlewares/tryCatch";

const router = Router();

router.get("/user", ctrlWrapper(usersController));

export default router;
