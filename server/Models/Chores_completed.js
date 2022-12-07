const mongoose = require("mongoose");

const ChoresCompletedSchema = new mongoose.Schema({
  chores_uid: {
    type: String,
    required: true,
  },
  parents_uid: {
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
  verified: {
    type: Boolean,
    required: true,
  },
});

const ChoresCompleted = mongoose.model("Chores_Completed", ChoresCompletedSchema);
module.exports = ChoresCompleted;
