// src/api.js
import axios from "axios";

// Base URL cho tất cả các request
const api = axios.create({
  baseURL: "http://localhost:5000/api/products",
});

export default api;
