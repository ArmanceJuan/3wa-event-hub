import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 3000;
const MONGODB_URI =
  "mongodb://esportroot:password1234@mongo:27017/esports?authSource=admin";

app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.get("/", (req, res) => {
  res.send("Welcome to the Home route of your backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
