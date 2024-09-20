const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const cors = require("cors");
const { default: connectDB } = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

connectDB();
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server Startes on PORT ${PORT} `));
