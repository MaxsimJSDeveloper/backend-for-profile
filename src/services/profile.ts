import { FriendsCollection } from "../db/models/friends";
import { TransactionsCollection } from "../db/models/transactions";
import { UsersCollection } from "../db/models/user";

export const usersService = async () => {
  const users = await UsersCollection.find();
  return users;
};

export const transactionsService = async () => {
  const transactions = await TransactionsCollection.find();
  return transactions;
};

export const friendsService = async () => {
  const friends = await FriendsCollection.find();
  return friends;
};
