import express from "express";
import notesRoutes from "./routes/noteRoutes.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDb();

// jannoelpaed17_db_user;
// Ur6TGAQqJle2move;
// middleware
app.use(express.json());
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("Server running on PORT:", PORT);
});
