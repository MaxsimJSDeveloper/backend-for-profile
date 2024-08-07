"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctrlWrapper = void 0;
const ctrlWrapper = (controller) => {
    return async (req, res, next) => {
        try {
            await controller(req, res, next);
        }
        catch (err) {
            next(err);
        }
    };
};
exports.ctrlWrapper = ctrlWrapper;
