const express = require("express");
const router = express.Router();
const orders = require("./orders");
const users = require("./users.js");

router.use("/orders", orders);
router.use("/users", users);

module.exports = router;
