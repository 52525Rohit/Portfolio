const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/database.js");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", require("./routes/contactRoutes"));

// Server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
