import { Router } from "express";
import {
  friendsController,
  transactionsController,
  usersController,
} from "../controllers/profile";

import { ctrlWrapper } from "../middlewares/tryCatch";

const router = Router();

router.get("/user", ctrlWrapper(usersController));

router.get("/transactions", ctrlWrapper(transactionsController));

router.get("/friends", ctrlWrapper(friendsController));

export default router;
