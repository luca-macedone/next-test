"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const NewNoteView = () => {
  const [data, setData] = useState([]);
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
    let temp = [nextNote, ...data]; // aggiungo il nuovo elemento in prima posizione
    // console.log(temp);
    setData(temp);
    localStorage.setItem("storageNotes", JSON.stringify(temp));
    // console.log(localStorage);
    setNextNote({
      note_name: "",
      note_text: "",
    });
  };

  useEffect(() => {
    let storage;
    if (typeof window !== "undefined") {
      storage = localStorage.getItem("storageNotes");
      storage = storage ? JSON.parse(storage) : [];
      // console.log(storage);
    }

    if (storage && storage.length > 0) {
      setData(storage);
      // console.log(data);
    } else {
      setData([]);
      // console.log(data);
    }
  }, []);

  return (
    <>
      <div className="w-full shadow-lg rounded-3xl p-5 bg-slate-50">
        <div className="font-semibold border-b py-3 px-5 shadow-lg rounded-xl w-full flex items-center justify-between">
          <span className="text-xl">New Note</span>
          <Link
            href="/dashboard"
            className="bg-primary text-white uppercase font-semibold px-6 py-1 rounded-lg hover:bg-secondary transition-colors duration-200 ease-in-out"
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
                  className="bg-zinc-200 p-3 rounded-xl mx-1 focus:outline-0"
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
                  className="bg-zinc-200 p-3 rounded-xl mx-1 focus:outline-0"
                  type="text"
                  name="note_text"
                  id="note-text"
                  value={nextNote.note_text}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <button
                type="reset"
                className="bg-primary text-white uppercase font-semibold px-6 py-1 rounded-lg hover:bg-secondary transition-colors duration-200 ease-in-out"
              >
                Reset &#8634;
              </button>
              <button
                type="submit"
                className="bg-primary text-white uppercase font-semibold px-6 py-1 rounded-lg hover:bg-secondary transition-colors duration-200 ease-in-out"
              >
                Add &#43;
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewNoteView;
