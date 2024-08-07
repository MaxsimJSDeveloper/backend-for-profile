import { Schema, model } from "mongoose";

const friendSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const FriendsCollection = model("friend", friendSchema, "friends");
