import express, { Request, Response } from "express";
import { initMongoDB } from "./db/initMongoDB";
import router from "./routes/profile";

const app = express();
const PORT: number = 8080;

const startServer = async () => {
  try {
    await initMongoDB();
    app.use(router);

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
