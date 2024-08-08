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
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendsController = exports.transactionsController = exports.usersController = void 0;
const profile_1 = require("../services/profile");
const usersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, profile_1.usersService)();
    res.status(200).json({
        status: 200,
        message: `Success!`,
        data: users,
    });
});
exports.usersController = usersController;
const transactionsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const transactions = yield (0, profile_1.transactionsService)();
    res.status(200).json({
        status: 200,
        message: `Success!`,
        data: transactions,
    });
});
exports.transactionsController = transactionsController;
const friendsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const friends = yield (0, profile_1.friendsService)();
    res.status(200).json({
        status: 200,
        message: `Success!`,
        data: friends,
    });
});
exports.friendsController = friendsController;
