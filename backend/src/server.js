import express from "express";
import notesRoutes from "./routes/noteRoutes.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// jannoelpaed17_db_user;
// Ur6TGAQqJle2move;
// middleware will parse JSON bodies: req.body
app.use(express.json());
// Custom middleware explanation
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(rateLimiter);

app.use((req, res, next) => {
  console.log(`Request method is ${req.method} and Request URL is ${req.url}`);
  next();
});
app.use("/api/notes", notesRoutes);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on PORT:", PORT);
  });
});
