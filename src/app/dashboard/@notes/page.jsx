"use client";
import notes from "@/data/notes";
import Link from "next/link";
import { useState } from "react";

const NotesSlot = () => {
  const [data, setData] = useState(notes);

  // const handleEdit = (position) => {

  // };

  const handleDelete = (position) => {
    setData(data.filter((el, i) => i !== position));
  };

  return (
    <>
      <div className="w-full shadow-lg rounded-3xl p-5 bg-slate-50">
        <div className=" border-b pb-3 flex items-center justify-between w-full">
          <span className="text-xl font-semibold">Notes</span>
          <Link
            href="/dashboard/new"
            className="bg-slate-200 uppercase font-semibold px-6 py-2 rounded-lg hover:bg-slate-300 hover:text-white cursor-pointer"
          >
            new
          </Link>
        </div>
        <div className="h-80 overflow-y-auto py-2">
          <ul className="flex flex-col items-start justify-start gap-3 w-full px-2">
            {data.map((note, index) => {
              return (
                <li
                  key={index}
                  className="p-2 shadow-md rounded-xl odd:bg-slate-100 w-full"
                >
                  <div className="flex items-center justify-between">
                    <strong>{note.note_name}</strong>
                    <div className="flex items-center gap-2">
                      {/* <button
                        type="button"
                        className="bg-blue-400 font-semibold px-3 py-1 rounded-lg hover:bg-blue-600 text-blue-800 hover:text-white cursor-pointer"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button> */}
                      <button
                        type="button"
                        className="bg-red-400 font-semibold px-3 py-1 rounded-lg hover:bg-red-600 text-red-800 hover:text-white cursor-pointer"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <p>{note.note_text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NotesSlot;
