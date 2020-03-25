const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
require("./models/User");

// Passport Config
require("./services/passport")(passport);

const app = express();

mongoose.connect(keys.mongoURI, () => console.log("Connected to Mongo"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/user", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Started"));
