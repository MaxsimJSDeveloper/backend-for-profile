"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const initMongoDB_1 = require("./db/initMongoDB");
const notFoundHendler_1 = require("./middlewares/notFoundHendler");
const errorHendler_1 = require("./middlewares/errorHendler");
const env_1 = require("./utils/env");
const profile_1 = __importDefault(require("./routes/profile"));
const app = (0, express_1.default)();
const PORT = Number((0, env_1.env)("PORT", "3000"));
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, initMongoDB_1.initMongoDB)();
        console.log("MongoDB connection established successfully");
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        app.use(profile_1.default);
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
        app.use("*", notFoundHendler_1.notFoundHandler);
        app.use(errorHendler_1.errorHandler);
    }
    catch (error) {
        console.error("Error starting server:", error);
        process.exit(1); // Остановите процесс, если произошла ошибка при запуске сервера
    }
});
startServer();
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
    process.exit(1); // Опционально, можно завершить процесс
});
process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    process.exit(1); // Опционально, можно завершить процесс
});
