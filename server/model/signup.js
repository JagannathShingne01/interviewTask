import mongoose from "mongoose";

const signUp = new mongoose.Schema({
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    time : { type: Number, default: (new Date()).getTime() }
  });

export default mongoose.model("ShoppingUser", signUp);
