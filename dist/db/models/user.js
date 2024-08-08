"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCollection = void 0;
const mongoose_1 = require("mongoose");
const statsSchema = new mongoose_1.Schema({
    followers: {
        type: Number,
        required: true,
    },
    views: {
        type: Number,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
    },
});
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        default: "user@gmail.com",
    },
    avatar: {
        type: String,
    },
    stats: {
        type: statsSchema,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.UsersCollection = (0, mongoose_1.model)("user", userSchema, "user");
