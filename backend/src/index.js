import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/messageRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser"
const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log(`🔨 Server is running on the port ${PORT}`);
  connectDB();
});
