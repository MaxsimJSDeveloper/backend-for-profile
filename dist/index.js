"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const initMongoDB_1 = require("./db/initMongoDB");
const profile_1 = __importDefault(require("./routes/profile"));
const notFoundHendler_1 = require("./middlewares/notFoundHendler");
const errorHendler_1 = require("./middlewares/errorHendler");
const env_1 = require("./utils/env");
const app = (0, express_1.default)();
const PORT = Number((0, env_1.env)("PORT", "3000"));
const startServer = async () => {
    await (0, initMongoDB_1.initMongoDB)();
    app.use(profile_1.default);
    app.use((0, cors_1.default)());
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
    app.use("*", notFoundHendler_1.notFoundHandler);
    app.use(errorHendler_1.errorHandler);
};
startServer();
