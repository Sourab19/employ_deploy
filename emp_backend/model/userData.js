const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  email: String,
  password: String,
});

const userData = mongoose.model("user", userSchema);// map schema to collection
module.exports = userData;
