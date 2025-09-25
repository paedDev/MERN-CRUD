import React, { useEffect, useState } from "react";
import RateLimit from "../components/RateLimit";
import axios from "axios";
const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/notes");
      console.log(res.data);
    } catch (error) {
      console.log("Error fetching notes", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen w-full mt-30 ">
      {isRateLimited && <RateLimit />}
    </div>
  );
};

export default HomePage;
