const mongoose = require("mongoose");
const KidsSchema = new mongoose.Schema({
  parent_uid: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

const Kids = mongoose.model("Kids", KidsSchema);
module.exports = Kids;
