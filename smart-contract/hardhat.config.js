require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",   // đổi từ 0.8.20 hoặc version khác thành 0.8.28
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  }
};
