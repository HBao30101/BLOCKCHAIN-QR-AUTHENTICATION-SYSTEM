const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    productId: { type: String, required: true, unique: true },
    hash: { type: String, required: true },
    createdBy: { type: String},
    timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Product", ProductSchema);