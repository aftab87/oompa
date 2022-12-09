const mongoose = require("mongoose");

const ChoresCompletedSchema = new mongoose.Schema({
  chores_uid: {
    type: String,
    required: true,
  },
  parent_uid: {
    type: String,
    required: true,
  },
  kids_uid: {
    type: String,
    required: true,
  },
});

const ChoresCompleted = mongoose.model("Chores_Completed", ChoresCompletedSchema);
module.exports = ChoresCompleted;
