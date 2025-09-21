import express from "express";
import {
  createNote,
  deleteNote,
  fetchAllNotes,
  updateNote,
} from "../controllers/noteController.js";

const router = express.Router();

router.get("/", fetchAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
