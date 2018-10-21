var mongoose = require("mongoose");

var complaintSchema = new mongoose.Schema({
  name: String
  // age: Number,
  // contact: Number,
  // crime: String,
  // description: String
})

module.exports = mongoose.model("Complaint", complaintSchema);
