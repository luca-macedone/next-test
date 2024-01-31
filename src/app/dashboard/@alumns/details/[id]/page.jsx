"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const Alumn = ({ params }) => {
  let alumnId = params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [alumn, setAlumn] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    note: "",
  });
  // console.log(alumnId);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (evt) => {
    // console.log(evt.target.value);
    setData({ ...data, note: evt.target.value });
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/api/alumns/${alumnId}`)
      .then((res) => {
        setAlumn(res.data);
        // console.log(res.data);
        res.status === 200 ? setIsLoading(false) : null;
        setData({ note: res.data.note });
      })
      .catch((err) => console.error(err));
  }, [alumnId]);

  return (
    <div className="w-full shadow-lg rounded-3xl p-5 bg-slate-50">
      {!isLoading && (
        <>
          <div className="border-b py-3 px-5 shadow-lg rounded-xl flex items-center justify-start gap-2">
            <img
              src={alumn.avatar}
              alt={alumn.name}
              className="rounded-full h-20 aspect-square"
            />
            <div className="flex items-center justify-between w-full">
              <span className="text-xl font-semibold">{alumn.name}</span>
              <Link
                href="/dashboard"
                className="bg-slate-300 uppercase font-semibold px-6 py-1 rounded-lg hover:bg-slate-400 hover:text-white cursor-pointer"
              >
                Back
              </Link>
            </div>
          </div>
          <div className="h-80 flex flex-col items-start justify-start">
            <div className="p-3 rounded-lg">
              <h6 className="font-bold text-xl">About</h6>
              <ul className="w-96">
                <li className="flex items-center justify-between gap-10">
                  <span className="font-semibold">Name</span>
                  <span>{alumn.name}</span>
                </li>
                <li className="flex items-center justify-between gap-10">
                  <span className="font-semibold">City</span>
                  <span>{alumn.city}</span>
                </li>
                <li className="flex items-center justify-between gap-10">
                  <span className="font-semibold">Address</span>
                  <span>{alumn.address}</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-200 p-3 rounded-lg h-full w-full overflow-y-auto">
              <div className="pb-2 border-b-2 border-white flex items-center justify-between w-full">
                <h6 className="font-bold text-xl">Notes</h6>
                <button
                  type="button"
                  className="bg-slate-300 uppercase font-semibold px-6 py-1 rounded-lg hover:bg-slate-400 hover:text-white cursor-pointer"
                  onClick={toggleEdit}
                >
                  {isEditing ? <>Done</> : <>Edit</>}
                </button>
              </div>
              <div className={isEditing ? "h-full" : ""}>
                {isEditing ? (
                  <>
                    <textarea
                      type="text"
                      name="notes_input"
                      id="notes_input"
                      value={data.note}
                      onChange={handleInputChange}
                      className="h-full w-full overflow-y-auto p-2"
                    ></textarea>
                  </>
                ) : (
                  <p className="p-2">{data.note}</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      {isLoading && (
        <>
          <div className="">
            <div className="flex items-center justify-end w-full border-b py-3 px-5 shadow-lg rounded-xl">
              <Link
                href="/dashboard"
                className="bg-slate-300 uppercase font-semibold px-6 py-2 rounded-lg hover:bg-slate-400 hover:text-white cursor-pointer"
              >
                Back
              </Link>
            </div>
            <div className="h-80">
              <div className="h-full w-full flex items-center justify-center">
                <h2 className="text-xl font-semibold">Loading...</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Alumn;
