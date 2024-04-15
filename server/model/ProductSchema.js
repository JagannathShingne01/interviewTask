import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  price: {
    type: String,
  },
});

export default mongoose.model("Product", productSchema);
