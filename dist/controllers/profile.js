"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendsController = exports.transactionsController = exports.usersController = void 0;
const profile_1 = require("../services/profile");
const usersController = async (req, res) => {
    const users = await (0, profile_1.usersService)();
    res.status(200).json({
        status: 200,
        message: `Success!`,
        data: users,
    });
};
exports.usersController = usersController;
const transactionsController = async (req, res) => {
    const transactions = await (0, profile_1.transactionsService)();
    res.status(200).json({
        status: 200,
        message: `Success!`,
        data: transactions,
    });
};
exports.transactionsController = transactionsController;
const friendsController = async (req, res) => {
    const friends = await (0, profile_1.friendsService)();
    res.status(200).json({
        status: 200,
        message: `Success!`,
        data: friends,
    });
};
exports.friendsController = friendsController;
