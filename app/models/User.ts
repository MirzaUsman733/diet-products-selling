import mongoose, { Schema, Document } from "mongoose";
import { ResolvingViewport } from "next/dist/lib/metadata/types/metadata-interface.js";

interface User extends Document {
  name: string;
  email: string;
  password?: string;
  role: string;
  approved: boolean;
}

const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    role: {
      type: String,
    },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", userSchema);
