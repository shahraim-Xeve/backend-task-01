const mongoose = require("mongoose");
const { Schema } = mongoose;

const ordersSchema = new Schema({
  adId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Orders = mongoose.model("orders", ordersSchema);
module.exports = Orders;
