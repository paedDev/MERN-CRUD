import React from "react";
import { Link } from "react-router";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const NoteCard = ({ note }) => {
  return (
    <Link
      to={`/note/${note._id}`}
      className="hover:shadow-xl transtiona-all duration-300 border-t-6 border-green-400   rounded-xl p-10 text-white hover:rotate-2 hover:-translate-y-2 bg-zinc-700 hover:border-green-200"
    >
      <div className="flex flex-col justify-center items-start space-y-6 ">
        <div>
          <h3 className="font-bold ">{note.title}</h3>
          <p className="text-gray-300">{note.content}</p>
        </div>

        <div className="flex justify-between space-x-4 w-full">
          <div>
            <span className="text-gray-300">{note.author}</span>
            <p className="text-gray-400">
              {new Date(note.createdAt).toLocaleString("default", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="flex items-end justify-end space-x-2 text-2xl">
            <CiEdit />
            <MdDelete className="text-red-400" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
