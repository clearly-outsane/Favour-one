const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");

const app = express();

mongoose.connect(keys.mongoURI, () => console.log("Connected to Mongo"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/user", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Started"));
