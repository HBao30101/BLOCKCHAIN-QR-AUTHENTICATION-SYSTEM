const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/product");

const app = express();
app.use(cors());
app.use(express.json());

// Kết nối MongoDB local
mongoose.connect("")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(console.error);

// Sử dụng route
app.use("/api/products", productRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
