import express, { Request, Response } from "express";
import cors from "cors";

import { initMongoDB } from "./db/initMongoDB";
import router from "./routes/profile";
import { notFoundHandler } from "./middlewares/notFoundHendler";
import { errorHandler } from "./middlewares/errorHendler";
import { env } from "./utils/env";

const app = express();
const PORT: Number = Number(env("PORT", "3000"));

const startServer = async () => {
  await initMongoDB();

  app.use(router);

  app.use(cors());

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });

  app.use("*", notFoundHandler);

  app.use(errorHandler);
};

startServer();
