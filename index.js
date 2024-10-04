import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
import {connectDB} from "./db/connections.js";
dotenv.config()
connectDB()
const PORT = process.env.PORT || 4000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Server is running smoothly!");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
