import { Request, Response } from "express";
import { usersServise } from "../services/profile";

export const usersController = async (req: Request, res: Response) => {
  const users = await usersServise();

  res.status(200).json({
    status: 200,
    message: `Success!`,
    data: users,
  });
};
