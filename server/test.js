const mongoose = require("mongoose");
const contract = require("./blockchain/contract");

// MongoDB URL
const MONGO_URI = "mongodb://127.0.0.1:27017/blockchainQR";

// Schema cho sản phẩm
const productSchema = new mongoose.Schema({
  productId: String,
  hash: String,
  createdBy: String,
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);

async function main() {
  try {
    // 1️⃣ Connect MongoDB
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");

    const productId = "SP123";
    const hash = "abc123";
    const createdBy = "Admin1";

    // 2️⃣ Register product trên blockchain
    console.log("⏳ Registering product on blockchain...");
    const tx = await contract.registerProduct(productId, hash);
    await tx.wait();
    console.log("✅ Product registered on blockchain");

    // 3️⃣ Lưu MongoDB
    const product = new Product({ productId, hash, createdBy });
    await product.save();
    console.log("✅ Product saved to MongoDB");

    // 4️⃣ Verify product trên blockchain
    console.log("⏳ Verifying product...");
    const valid = await contract.verifyProduct(productId, hash);
    console.log(valid ? "✅ Verification success: true" : "❌ Verification failed");

    process.exit(0);
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
}

main();
