const mongoose = require("mongoose");
const KidsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
});
// Mongoose will assume there is a collection called the plural of this name (i.e.,
// 'users' in this case).
const Kids = mongoose.model("Kids", KidsSchema);
module.exports = Kids;
