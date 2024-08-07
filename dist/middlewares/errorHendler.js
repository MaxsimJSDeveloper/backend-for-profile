"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_errors_1 = require("http-errors");
const errorHandler = (err, req, res, next) => {
    if (err instanceof http_errors_1.HttpError) {
        res.status(err.status).json({
            status: err.status,
            message: err.message,
            data: err,
        });
        return;
    }
    res.status(500).json({
        status: 500,
        message: "Something went wrong",
        error: err.message,
    });
};
exports.errorHandler = errorHandler;
