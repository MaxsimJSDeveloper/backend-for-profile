import { model, Schema } from "mongoose";

const statsSchema = new Schema({
  followers: {
    type: Number,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
});

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      default: "user@gmail.com",
    },
    avatar: {
      type: String,
    },
    stats: {
      type: statsSchema,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const UsersCollection = model("user", userSchema, "user");
