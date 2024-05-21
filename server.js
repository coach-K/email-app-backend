const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: process.env.FRONTEND_BASE_URL || "http://localhost:4000"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Email Backend." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});