require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;
const SERVICE_NAME = process.env.SERVICE_NAME || "cart-service";

// In-memory cart store
let carts = {};

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: `${SERVICE_NAME} running` });
});

// Get cart for a user
app.get("/cart/:userId", (req, res) => {
  const userId = req.params.userId;
  res.json(carts[userId] || []);
});

// Add item to cart
app.post("/cart/:userId/add", (req, res) => {
  const userId = req.params.userId;
  const { productId, quantity } = req.body;

  if (!carts[userId]) carts[userId] = [];
  carts[userId].push({ productId, quantity });

  res.json({ message: "Item added to cart", cart: carts[userId] });
});

// Remove item from cart
app.post("/cart/:userId/remove", (req, res) => {
  const userId = req.params.userId;
  const { productId } = req.body;

  if (!carts[userId]) return res.json({ cart: [] });

  carts[userId] = carts[userId].filter(item => item.productId !== productId);
  res.json({ message: "Item removed", cart: carts[userId] });
});

app.listen(PORT, () => {
  console.log(`${SERVICE_NAME} running on port ${PORT}`);
});