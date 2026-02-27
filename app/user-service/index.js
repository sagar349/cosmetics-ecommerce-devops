require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5002;
const SERVICE_NAME = process.env.SERVICE_NAME || "user-service";

// In-memory user store
let users = [];

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: `${SERVICE_NAME} running` });
});

// Register a user
app.post("/users/register", (req, res) => {
  const { id, name, email } = req.body;
  users.push({ id, name, email });
  res.json({ message: "User registered", user: { id, name, email } });
});

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`${SERVICE_NAME} running on port ${PORT}`);
});