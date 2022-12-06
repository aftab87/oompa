const mongoose = require("mongoose");

// ***********Rewards SCHEMA ****************

const RewardsSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
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
        type: Date,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
    should_persist: {
        type: Boolean,
        required: true,
    },
});


const Rewards = mongoose.model("Rewards", RewardsSchema);
module.exports = Rewards;