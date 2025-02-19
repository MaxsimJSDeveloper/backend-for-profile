import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.message,
      data: err,
    });
    return;
  }
  res.status(500).json({
    status: 500,
    message: "Something went wrong",
    error: err.message,
  });
};
