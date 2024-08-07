import { Request, Response } from "express";
import {
  friendsService,
  transactionsService,
  usersService,
} from "../services/profile";

export const usersController = async (req: Request, res: Response) => {
  const users = await usersService();

  res.status(200).json({
    status: 200,
    message: `Success!`,
    data: users,
  });
};

export const transactionsController = async (req: Request, res: Response) => {
  const transactions = await transactionsService();

  res.status(200).json({
    status: 200,
    message: `Success!`,
    data: transactions,
  });
};

export const friendsController = async (req: Request, res: Response) => {
  const friends = await friendsService();

  res.status(200).json({
    status: 200,
    message: `Success!`,
    data: friends,
  });
};
