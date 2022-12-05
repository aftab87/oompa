const mongoose = require("mongoose");

// ***********Kids SCHEMA ****************
const KidsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// ***********CHORES SCHEMA ****************
const ChoresSchema = new mongoose.Schema({
  parent_uid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  points: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  kids: {
    type: [KidsSchema],
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  repetition: {
    type: [Number],
    required: true,
  },
});

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

// Mongoose will assume there is a collection called the plural of this name (i.e.,
// 'users' in this case).
const ChoresCompleted = mongoose.model("ChoresCompleted", ChoresCompletedSchema);
const Chores = mongoose.model("Chores", ChoresSchema);
module.exports = Chores;
module.exports = ChoresCompleted;
