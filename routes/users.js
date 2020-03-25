const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const User = mongoose.model("users");

router.get("/login", (req, res) => res.send("Login"));

router.get("/register", (req, res) => res.send("Register"));

router.post("/login", (req, res, next) => {
  console.log("In login node:", req.body);
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send({ err: "No such user" });
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.send(user);
    });
  })(req, res, next);
});

router.post("/register", async (req, res, next) => {
  console.log("In register node:", req.body);
  const { firstname, lastname, gender, email, password, role } = req.body;
  const user = await User.findOne({ email: email });
  if (user) return res.send({ err: "User already exists" });
  else {
    const newUser = new User({
      firstname,
      lastname,
      gender,
      email,
      password,
      role
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => {
            passport.authenticate("local", (err, user, info) => {
              if (err) {
                return next(err);
              }
              req.logIn(user, function(err) {
                if (err) {
                  return next(err);
                }
                return res.send(user);
              });
            })(req, res, next);
          })
          .catch(err => console.log(err));
      });
    });
  }
});
module.exports = router;
