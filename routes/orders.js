const express = require("express");
const router = express.Router();
const Orders = require("../model/OrderSchema");

router.get("/", async (req, res) => {
  try {
    const orders = await Orders.find();
    res.send({ message: "database fetching data", data: orders });
  } catch (error) {
    res.send({ message: "database not fetching data" });
    console.log(error);
  }
});
router.post("/add", async (req, res) => {
  try {
    await Orders.create(req.body);
    res.send({ message: "data added" });
  } catch (error) {
    console.log(error);
    res.send({ message: "data not added" });
  }
});

module.exports = router;
