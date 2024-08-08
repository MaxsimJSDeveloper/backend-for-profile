"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendsCollection = void 0;
const mongoose_1 = require("mongoose");
const friendSchema = new mongoose_1.Schema({
    avatar: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    isOnline: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.FriendsCollection = (0, mongoose_1.model)("friend", friendSchema, "friends");
