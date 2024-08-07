import express, { Request, Response } from "express";
import { initMongoDB } from "./db/initMongoDB";

const app = express();
const PORT: number = 8080;

const startServer = async () => {
  try {
    await initMongoDB();
    app.use("/", (req: Request, res: Response) => {
      res.send("Hello world");
    });

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
