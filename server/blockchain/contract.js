// server/blockchain/contract.js
const { ethers } = require("ethers");
const ProductRegistry = require("../../smart-contract/artifacts/contracts/ProductRegistry.sol/ProductRegistry.json");

// ✅ Địa chỉ contract đã deploy


// ✅ Kết nối RPC node (Hardhat local)
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

// ✅ Private key account #0 từ hardhat node


// ✅ Tạo signer (có quyền gửi transaction)
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// ✅ Kết nối contract với signer (không phải provider)
const contract = new ethers.Contract(CONTRACT_ADDRESS, ProductRegistry.abi, signer);

console.log("✅ Contract connected with signer:", signer.address);

module.exports = contract;
