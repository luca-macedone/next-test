"use client";
import notes from "@/data/notes";
import Link from "next/link";
import { useState } from "react";

const NewNoteView = () => {
  const [nextNote, setNextNote] = useState({
    note_name: "",
    note_text: "",
  });

  const handleChange = (evt) => {
    setNextNote({
      ...nextNote,
      [evt.target.name]: evt.target.value,
    });
    // console.log(nextNote);
  };

  const addNewNote = () => {
    notes.push(nextNote);
    setNextNote({
      note_name: "",
      note_text: "",
    });
  };

  return (
    <>
      <div className="w-full shadow-lg rounded-3xl p-5 bg-slate-50">
        <div className=" border-b pb-3 flex items-center justify-between w-full">
          <span className="text-xl font-semibold">New Note</span>
          <Link
            href="/dashboard"
            className="bg-slate-200 uppercase font-semibold px-6 py-2 rounded-lg hover:bg-slate-300 hover:text-white cursor-pointer"
          >
            Back
          </Link>
        </div>
        <div className="h-80 overflow-y-auto">
          <form
            onSubmit={($event) => {
              $event.preventDefault();
              $event.stopPropagation();
              addNewNote();
            }}
            className="flex flex-col items-end justify-between h-full py-4"
          >
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="note-name">Note name</label>
                <input
                  className="bg-slate-200 p-3 rounded-xl mx-1 focus:outline-0"
                  type="text"
                  name="note_name"
                  id="note-name"
                  value={nextNote.note_name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="note-text">Note content</label>
                <input
                  className="bg-slate-200 p-3 rounded-xl mx-1 focus:outline-0"
                  type="text"
                  name="note_text"
                  id="note-text"
                  value={nextNote.note_text}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-slate-200 uppercase font-semibold px-6 py-2 rounded-lg hover:bg-slate-300 hover:text-white cursor-pointer"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewNoteView;
