import { UsersCollection } from "../db/models/user";

export const usersServise = async () => {
  const users = await UsersCollection.find();
  return users;
};
