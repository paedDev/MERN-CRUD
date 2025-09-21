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
};

export const createNote = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newNote = new Note({
      title,
      content,
      author,
    });
    await newNote.save();
    res.status(201).json({ message: "Note created succesfully" });
  } catch (error) {
    console.error("Error in creating a note", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updateNote = async (req, res) => {
  res.status(200).json({ message: "Note updated succesfully" });
};

export const deleteNote = async (req, res) => {
  res.status(200).json({ message: "Note deleted succesfully" });
};
