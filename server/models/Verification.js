const mongoose = require("mongoose");

const VerificationSchema = new mongoose.Schema({
  productId: String,
  hash: String,
  verifiedBy: String,
  result: Boolean,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Verification", VerificationSchema);
