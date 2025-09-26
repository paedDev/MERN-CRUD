import React, { useEffect, useState } from "react";
import RateLimit from "../components/RateLimit";
import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/notes");
      setNotes(res.data);
      console.log(res.data);

      setIsRateLimited(false);
      setLoading(true);
    } catch (error) {
      console.log("Error fetching notes", error);

      if (error?.response?.status === 429) {
        setIsRateLimited(true);
      } else {
        toast.error("Failed to load notes");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen w-full mt-30 ">
      {isRateLimited && <RateLimit />}

      <div className="max-w-7xl mx-auto p-6 mt-6 ">
        {loading && (
          <div className="text-center text-primary py-10">
            Loading notes ....
          </div>
        )}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {notes.map((note, index) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
