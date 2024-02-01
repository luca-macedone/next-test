"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import addHomework from "@/actions/addHomework";

const HomeworksDefaultSlot = () => {
  const [alumns, setAlumns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/alumns")
      .then((res) => {
        // console.log(res);
        setAlumns(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className="w-full shadow-lg rounded-3xl p-5 bg-slate-50 h-full">
        <h2 className="text-xl font-semibold border-b py-3 px-5 shadow-lg rounded-xl">
          Homeworks
        </h2>
        <div className="h-80 overflow-y-auto">
          {!isLoading ? (
            <form
              action={addHomework}
              className="pt-5 flex flex-col gap-3 w-full items-start justify-start"
            >
              <div className="flex items-start justify-between w-full">
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="alumn">Alumn</label>
                  <select
                    name="alumn"
                    id="alumn"
                    className="bg-slate-200 p-3 rounded-xl mx-1 focus:outline-0"
                  >
                    {alumns.map((alumn) => {
                      return (
                        <option
                          key={alumn.id}
                          value={alumn.id}
                          className="py-4 inline-block"
                        >
                          {alumn.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="homework-name">Name</label>
                  <input
                    className="bg-slate-200 p-3 rounded-xl mx-1 focus:outline-0"
                    type="text"
                    name="homework_name"
                    id="homework-name"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="homework-description">Description</label>
                <textarea
                  name="homework_description"
                  id="homework-description"
                  rows="4"
                  className="bg-slate-200 p-3 rounded-xl mx-1 focus:outline-0"
                ></textarea>
              </div>
              <div className="flex items-center justify-end gap-2">
                <button
                  type="reset"
                  className="bg-slate-200 uppercase font-semibold px-6 py-1 rounded-lg hover:bg-slate-300 hover:text-white cursor-pointer"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="bg-slate-200 uppercase font-semibold px-6 py-1 rounded-lg hover:bg-slate-300 hover:text-white cursor-pointer"
                >
                  Add
                </button>
              </div>
            </form>
          ) : (
            <>
              <h1>loading</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeworksDefaultSlot;
