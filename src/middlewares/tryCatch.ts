import { Request, Response, NextFunction } from "express";

type Controller = (req: Request, res: Response, next: NextFunction) => void;

export const ctrlWrapper = (controller: Controller) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
