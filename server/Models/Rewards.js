const mongoose = require("mongoose");

// ***********Rewards SCHEMA ****************

const RewardsSchema = new mongoose.Schema({
  parent_uid: {
    type: String,
    required: true,
  },
  kids: {
    type: [String],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

const Rewards = mongoose.model("Rewards", RewardsSchema);
module.exports = Rewards;
