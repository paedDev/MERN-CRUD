import mongoose from "mongoose";

//1 create a schema
// 2 create a model base on the schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: [2, "Title must be at least 2 characters long."],
      maxLength: 100,
    },
    content: {
      type: String,
      minLength: [10, "Content must be at least 10 characters long."],
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //will create createdAt and updatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
