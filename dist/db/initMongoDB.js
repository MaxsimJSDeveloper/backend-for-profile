"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initMongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("../utils/env");
const initMongoDB = async () => {
    try {
        const user = (0, env_1.env)("MONGODB_USER");
        const pwd = (0, env_1.env)("MONGODB_PASSWORD");
        const url = (0, env_1.env)("MONGODB_URL");
        const db = (0, env_1.env)("MONGODB_DB");
        await mongoose_1.default.connect(`mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`);
        console.log("Mongo connection successfully established!");
    }
    catch (e) {
        console.log("Error while setting up mongo connection", e);
        throw e;
    }
};
exports.initMongoDB = initMongoDB;
