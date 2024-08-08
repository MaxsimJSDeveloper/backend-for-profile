"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsCollection = void 0;
const mongoose_1 = require("mongoose");
const transactionSchema = new mongoose_1.Schema({
    type: {
        type: String,
        enum: ["invoice", "payment", "withdrawal", "deposit"],
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.TransactionsCollection = (0, mongoose_1.model)("transaction", transactionSchema, "transaction");
