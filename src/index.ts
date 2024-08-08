import express from "express";
import cors from "cors";

import { initMongoDB } from "./db/initMongoDB";
import { notFoundHandler } from "./middlewares/notFoundHendler";
import { errorHandler } from "./middlewares/errorHendler";
import { env } from "./utils/env";

import router from "./routes/profile";

const app = express();
const PORT: Number = Number(env("PORT", "3000"));

const startServer = async () => {
  try {
    await initMongoDB();

    app.use(cors());
    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });

    app.use("*", notFoundHandler);
    app.use(errorHandler);
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1); // Остановите процесс, если произошла ошибка при запуске сервера
  }
};

startServer();

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1); // Опционально, можно завершить процесс
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1); // Опционально, можно завершить процесс
});
