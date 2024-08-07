import { Request, Response, Router } from "express";
import { UsersCollection } from "../db/models/user";

const router = Router();

router.get("/user", async (req: Request, res: Response) => {
  try {
    const users = await UsersCollection.find();
    res.status(200).json({
      status: 200,
      message: `Success!`,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: `Error fetching users`,
    });
  }
});

export default router;
