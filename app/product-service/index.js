require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Sample cosmetic products
const products = [
  { id: 1, name: "Lipstick", price: 499 },
  { id: 2, name: "Foundation", price: 899 },
  { id: 3, name: "Eyeliner", price: 299 }
];

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "Product service running" });
});

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`${SERVICE_NAME} running on port ${PORT}`);
});
