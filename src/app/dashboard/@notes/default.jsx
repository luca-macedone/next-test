"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const NotesSlot = () => {
  let storageNotes;
  if (typeof window !== "undefined") {
    storageNotes = localStorage.getItem("storageNotes");
    storageNotes = storageNotes ? JSON.parse(storageNotes) : [];
  }
  // console.log(storageNotes);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const handleEdit = (position) => {

  // };

  const handleDelete = (position) => {
    let temp = [...data];
    temp = [...temp.filter((el, i) => i !== position)];
    setData(temp);

    localStorage.setItem("storageNotes", JSON.stringify(temp));
  };

  useEffect(() => {
    setIsLoading(true);
    if (storageNotes && storageNotes.length > 0) {
      setData(storageNotes);
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      <div className="w-full shadow-lg rounded-3xl p-5 bg-slate-50">
        <div className="font-semibold border-b py-3 px-5 shadow-lg rounded-xl w-full flex items-center justify-between">
          <span className="text-xl font-semibold">Notes</span>
          <Link
            href="/dashboard/new"
            className="bg-primary text-white uppercase font-semibold px-6 py-1 rounded-lg hover:bg-secondary transition-colors duration-200 ease-in-out"
          >
            new
          </Link>
        </div>
        <div className="h-80 overflow-y-auto py-2">
          {!isLoading && (
            <ul className="flex flex-col items-start justify-start gap-3 w-full px-2">
              {data.length > 0 ? (
                data.map((note, index) => {
                  return (
                    <li
                      key={index}
                      className="p-2 shadow-md rounded-xl odd:bg-zinc-200 even:bg-slate-200 w-full"
                    >
                      <div className="flex items-end justify-between pb-3 border-b border-gray-300">
                        <strong className="uppercase">{note.note_name}</strong>
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
                })
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <h2 className="bg-slate-100 w-full rounded-lg p-3 shadow-lg text-center">
                    Nothing here...yet!
                  </h2>
                </div>
              )}
            </ul>
          )}
          {isLoading && (
            <div className="h-full w-full flex items-center justify-center">
              <h2 className="bg-slate-100 rounded-3xl p-10 shadow-lg flex items-center justify-center gap-3">
                Loading...
                <span class="material-symbols-outlined animate-spin">
                  progress_activity
                </span>
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NotesSlot;
