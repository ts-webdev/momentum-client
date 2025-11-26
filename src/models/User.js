import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String }, 
  provider: { type: String, default: "credentials" }, 
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
