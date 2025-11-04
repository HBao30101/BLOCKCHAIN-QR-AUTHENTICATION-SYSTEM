const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const Verification = require("../models/Verification");
const contract = require("../blockchain/contract");

// Middleware validate input
function validateRegister(req, res, next) {
  const { productId, hash, createdBy } = req.body;
  if (!productId || !hash || !createdBy) {
    return res.status(400).json({ success: false, message: "Missing productId, hash, or createdBy" });
  }
  next();
}

// Admin register product
router.post("/register", validateRegister, async (req, res) => {
  const { productId, hash, createdBy } = req.body;
  try {
    // Send transaction to blockchain
    const tx = await contract.registerProduct(productId, hash);
    await tx.wait(); // wait for confirmation

    // Save in MongoDB
    const product = await Product.create({ productId, hash, createdBy });

    res.json({ success: true, product });
  } catch (err) {
    console.error("Error registering product:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// User verify product
router.post("/verify", async (req, res) => {
  const { productId, hash, verifiedBy } = req.body;
  if (!productId || !hash || !verifiedBy) {
    return res.status(400).json({ success: false, message: "Missing productId, hash, or verifiedBy" });
  }

  try {
    const isValid = await contract.verifyProduct(productId, hash);

    await Verification.create({ productId, hash, verifiedBy, result: isValid });

    res.json({ success: true, result: isValid });
  } catch (err) {
    console.error("Error verifying product:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
