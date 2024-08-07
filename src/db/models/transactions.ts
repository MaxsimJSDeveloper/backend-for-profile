import { model, Schema } from "mongoose";

const transactionSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["invoice", "payment", "withdrawal", "deposit"],
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Создаем и экспортируем модель
export const TransactionsCollection = model(
  "transaction",
  transactionSchema,
  "transactions"
);
