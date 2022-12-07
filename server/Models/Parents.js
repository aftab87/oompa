const mongoose = require("mongoose");
const ParentsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    required: true,
  },
  appellation: {
    type: String,
    required: true,
  },
  avatar_uid: {
    type: String,
  },
  kids: {
    type: [String],
  },
});

const Parents = mongoose.model("Parents", ParentsSchema);
module.exports = Parents;
