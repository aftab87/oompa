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
  claimed_kids: {
    type:[String],
    required: false
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
  // need to add should persist, will test after reward landing page done
});

const Rewards = mongoose.model("Rewards", RewardsSchema);
module.exports = Rewards;
