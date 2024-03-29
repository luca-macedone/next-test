"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import editAlumn from "@/actions/editAlumnAction";

const Alumn = ({ params }) => {
  let alumnId = params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [alumn, setAlumn] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    note: "",
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (evt) => {
    setData({ ...data, note: evt.target.value });
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/api/alumns/${alumnId}`)
      .then((res) => {
        setAlumn(res.data);

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
                className="bg-primary text-white uppercase font-semibold px-6 py-1 rounded-lg hover:bg-secondary transition-colors duration-200 ease-in-out"
              >
                Back
              </Link>
            </div>
          </div>
          <div className="min-h-80 grid grid-flow-row grid-cols-1 lg:grid-cols-2">
            <div className="p-3 rounded-lg w-full lg:col-span-2 grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <h6 className="font-bold text-xl">About</h6>
                <div className="w-full flex items-start justify-start gap-12">
                  <ul className="">
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
                  <ul className="border-s-2 px-5">
                    <li className="flex items-center justify-between gap-10">
                      <span className="font-semibold">Class</span>
                      <span>{alumn.class}</span>
                    </li>
                  </ul>
                </div>
              </div>
              {alumn.homeworks && (
                <div className="w-full">
                  {alumn.homeworks.length > 0 ? (
                    <>
                      <h5 className="text-xl font-semibold border-b py-3 px-5 shadow rounded-xl w-full">
                        Homeworks
                      </h5>
                      <ul className="flex items-center gap-2 w-full flex-wrap py-2">
                        {alumn.homeworks.map((item) => {
                          return (
                            <li
                              key={item.id}
                              className="px-3 py-1 even:bg-zinc-100  rounded-lg flex items-center gap-2 shadow italic"
                            >
                              {item.name}
                              <span>{item.done ? <>✔️</> : <>❌</>}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <>
                      <h5>No homeworks yet!</h5>
                    </>
                  )}
                </div>
              )}
            </div>
            <div
              className={
                isEditing
                  ? "bg-zinc-200 rounded-xl h-full w-full p-3 lg:col-span-2"
                  : "bg-zinc-100 rounded-xl h-full w-full p-3 lg:col-span-2"
              }
            >
              <div className="pb-2 border-b-2 border-white flex items-center justify-between w-full">
                <h6 className="font-bold text-xl">Notes</h6>
                <button
                  type={isEditing ? "reset" : "button"}
                  className="bg-primary text-white uppercase font-semibold px-6 py-1 rounded-lg hover:bg-secondary transition-colors duration-200 ease-in-out"
                  onClick={toggleEdit}
                >
                  {isEditing ? <>Close</> : <>Edit</>}
                </button>
              </div>
              <div className={isEditing ? "h-full" : ""}>
                {isEditing ? (
                  <>
                    <form
                      action={() => {
                        setIsEditing(!isEditing);
                        editAlumn(data, alumnId);
                      }}
                    >
                      <textarea
                        type="text"
                        name="notes_input"
                        id="notes_input"
                        value={data.note}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full p-2 bg-zinc-200 border-2 border-white rounded-b-xl focus:outline-0"
                      ></textarea>
                      <button
                        type="submit"
                        className="bg-primary text-white uppercase font-semibold px-6 py-1 rounded-lg hover:bg-secondary transition-colors duration-200 ease-in-out"
                      >
                        Done
                      </button>
                    </form>
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
                className="bg-primary text-white uppercase font-semibold px-6 py-1 rounded-lg hover:bg-secondary transition-colors duration-200 ease-in-out"
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
