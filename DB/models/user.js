import { Schema, model } from "mongoose";
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  bio: String,
});
export const User_Model = model("userProfile", userSchema);