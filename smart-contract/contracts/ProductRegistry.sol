// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ProductRegistry {
    struct Product {
        string productId;
        string hash;
        uint256 timestamp;
        address registeredBy;
    }

    mapping(string => Product) public products;

    event ProductRegistered(string productId, string hash, uint256 timestamp);

    function registerProduct(string memory productId, string memory hash) public {
        require(bytes(products[productId].productId).length == 0, "Product exists");
        products[productId] = Product(productId, hash, block.timestamp, msg.sender);
        emit ProductRegistered(productId, hash, block.timestamp);
    }

    function verifyProduct(string memory productId, string memory hash) public view returns (bool) {
        return keccak256(bytes(products[productId].hash)) == keccak256(bytes(hash));
    }
}