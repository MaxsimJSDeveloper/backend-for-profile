"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendsService = exports.transactionsService = exports.usersService = void 0;
const friends_1 = require("../db/models/friends");
const transactions_1 = require("../db/models/transactions");
const user_1 = require("../db/models/user");
const usersService = async () => {
    const users = await user_1.UsersCollection.find();
    return users;
};
exports.usersService = usersService;
const transactionsService = async () => {
    const transactions = await transactions_1.TransactionsCollection.find();
    return transactions;
};
exports.transactionsService = transactionsService;
const friendsService = async () => {
    const friends = await friends_1.FriendsCollection.find();
    return friends;
};
exports.friendsService = friendsService;
