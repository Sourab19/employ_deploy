const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
  email: String,
  password: String,
});

const adminData = mongoose.model("admin", adminSchema);// map schema to collection
module.exports = adminData;
