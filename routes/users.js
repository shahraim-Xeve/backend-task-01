const express = require("express");
const router = express.Router();
const Users = require("../model/UsersSchema.js");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  const users = await Users.find();
  res.send(users);
});

router.post("/register", async (req, res) => {
  try {
    await Users.create(req.body);
    res.status(200).send({ message: "user registered" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.put("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });
  if (!user) {
    res.status(404).send({ message: "email not found" });
    return;
  }
  //   comparePassword
  const isCorrectPassword = user.confirmPassword(password);
  if (!isCorrectPassword) {
    res.status(404).send({ message: "password not matched" });
    return;
  }
  res.status(200).send({ message: "login successfully" });
});

module.exports = router;
