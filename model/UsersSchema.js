const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");

const usersSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  age: {
    type: Number,
    required: true,
  },
});

usersSchema.pre("save", function (next) {
  const user = this;
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  next();
});

usersSchema.methods.confirmPassword = function (password) {
  const user = this;
  return bcrypt.compareSync(password, user.password);
};

const Users = mongoose.model("users", usersSchema);
module.exports = Users;
