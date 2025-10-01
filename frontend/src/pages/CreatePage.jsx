import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import axios from "axios";
import api from "../lib/axios";
const CreatePage = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    setForm((prev) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { title, content, author } = form;
    if (!title.trim() || !content.trim() || !author.trim()) {
      toast.error("All fields are required");
      return;
    }
    try {
      setLoading(true);
      const data = await api.post("/notes", {
        title,
        content,
        author,
      });
      console.log(data);

      setTimeout(() => {
        toast.success("Note created successfully");
      }, 2000);
      navigate("/");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message);
      } else {
        toast.error("Failed to create note");
      }
      console.log(`Error creating a note`, error);
      toast.error("Failed to create note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full mt-20 p-10 ">
      <div className="lg:max-w-4xl min-w-2xl h-full mx-auto text-white  bg-zinc-900 p-10 rounded-xl space-y-6">
        <Link
          to={"/"}
          className="inline-flex items-center space-x-2 hover:bg-zinc-800 rounded px-3 py-2"
        >
          <FaArrowLeft size={20} />
          <span>Back to Note</span>
        </Link>
        <form
          action={""}
          onSubmit={handleSubmitForm}
          className="flex  justify-center flex-col w-[80%] mx-auto space-y-10 bg-zinc-800 p-6 rounded-2xl "
        >
          <h1 className="font-bold text-4xl ">Create New Note</h1>
          <div className="flex flex-col space-y-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Note Title"
              className="border rounded-xl px-2 py-3 border-gray-600 text-sm"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="content">Content</label>
            <textarea
              type="text"
              onChange={handleInputChange}
              name="content"
              placeholder="Note Content"
              className="border rounded-xl px-2 py-3 border-gray-600 text-sm min-h-30"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              placeholder="Note Author"
              onChange={handleInputChange}
              className="border rounded-xl px-2 py-3 border-gray-600 text-sm"
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-green-400 px-4 py-2 rounded-xl">
              {loading ? "Loading . . ." : "Create Note"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
