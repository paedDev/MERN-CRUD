import express from "express";
import {
  createNote,
  deleteNote,
  fetchAllNotes,
  fetchNoteById,
  updateNote,
} from "../controllers/noteController.js";

const router = express.Router();

router.get("/", fetchAllNotes);
router.get("/:id", fetchNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
