const mongoose = require("mongoose");

const ChoresCompletedSchema = new mongoose.Schema({
  chores_uid: {
    type: String,
    required: true,
  },
  kids_uid: {
    type: String,
    required: true,
  },
  date_completed: {
    type: Date,
    required: true,
  },
  Verified: {
    type: Boolean,
    required: true,
  },
});

const ChoresCompleted = mongoose.model("ChoresCompleted", ChoresCompletedSchema);
module.exports = ChoresCompleted;
