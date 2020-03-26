const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");

// Passport Config
require("./services/passport")(passport);

const app = express();
mongoose.connect(keys.mongoURI, () => console.log("Connected to Mongo"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/user", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Started"));
