const mongoose = require("mongoose");

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
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  kids: {
    type: [String],
    required: true,
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

// Mongoose will assume there is a collection called the plural of this name (i.e.,
// 'users' in this case).

const Chores = mongoose.model("Chores", ChoresSchema);
module.exports = Chores;
