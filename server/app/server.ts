import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import chatRoute from "./routes/chatRoute";
connectDB();
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", chatRoute);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("AI Study Planner API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});