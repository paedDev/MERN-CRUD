import Note from "../models/Note.js";

export const fetchAllNotes = async (req, res) => {
  let notes;
  try {
    notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error getting all notes", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
  if (!notes) {
    return res.status(404).json({
      message: "No notes found",
    });
  }
};

export const createNote = async (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    return res.status(400).json({
      message: "All fields are required.",
    });
  }
  try {
    const note = new Note({
      title,
      content,
      author,
    });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in creating a note", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updateNote = async (req, res) => {
  const id = req.params.id;
  const { title, content, author } = req.body;

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      {
        title,
        content,
        author,
      },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({
        message: "Note not found",
      });
    }
    res.status(200).json({
      message: "Note updated successfully",
      note: updatedNote,
    });
  } catch (error) {
    console.error("Error in updating note", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const deleteNote = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteNote = await Note.findByIdAndDelete(id);
    if (!deleteNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    console.error("Error in deleting a note", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
