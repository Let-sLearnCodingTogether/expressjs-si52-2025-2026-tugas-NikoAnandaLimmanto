import mongoose from "mongoose";

const ResepSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
    unique: true,
  },
  instructions: {
    type: String,
    required: true,
  },
});

const ResepModel = mongoose.model("Resep", ResepSchema);

export default ResepModel;