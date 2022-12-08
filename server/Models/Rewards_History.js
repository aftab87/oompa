const mongoose = require("mongoose");

// ***********Rewards SCHEMA ****************

const Rewards_HistorySchema = new mongoose.Schema({


    reward_uid: {
        type: String,
        required: true,
    },
    kids_uid: {
        type: String,
        required: true,
    },
    date_redeemed: {
        type: Date,
        required: true,
    },
    date_delivered: {
        type: Date,
        required: true,
    },
    should_persist: {
        type: Boolean,
        required: false
    }

});


const Rewards_History = mongoose.model("RewardsHistory", Rewards_HistorySchema);
module.exports = Rewards_History;