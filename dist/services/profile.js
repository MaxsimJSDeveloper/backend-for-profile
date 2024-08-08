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
exports.friendsService = exports.transactionsService = exports.usersService = void 0;
const friends_1 = require("../db/models/friends");
const transactions_1 = require("../db/models/transactions");
const user_1 = require("../db/models/user");
const usersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.UsersCollection.find();
    return users;
});
exports.usersService = usersService;
const transactionsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const transactions = yield transactions_1.TransactionsCollection.find();
    return transactions;
});
exports.transactionsService = transactionsService;
const friendsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const friends = yield friends_1.FriendsCollection.find();
    return friends;
});
exports.friendsService = friendsService;
