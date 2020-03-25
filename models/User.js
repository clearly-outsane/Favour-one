const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  gender: String,
  email: String,
  password: String,
  role: String
});

mongoose.model("users", userSchema);
