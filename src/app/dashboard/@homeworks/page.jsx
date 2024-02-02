"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import addHomework from "@/actions/addHomework";

const HomeworksSlot = () => {
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
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="alumn">Alumn</label>
                <select
                  name="alumn"
                  id="alumn"
                  className="bg-zinc-200 p-3 rounded-xl mx-1 focus:outline-0"
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
                  className="bg-zinc-200 p-3 rounded-xl mx-1 focus:outline-0"
                  type="text"
                  name="homework_name"
                  id="homework-name"
                />
              </div>

              <div className="w-full flex flex-col gap-2">
                <label htmlFor="homework-description">Description</label>
                <textarea
                  name="homework_description"
                  id="homework-description"
                  rows="4"
                  className="bg-zinc-200 p-3 rounded-xl mx-1 focus:outline-0"
                ></textarea>
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
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <h2 className="bg-zinc-100 rounded-3xl p-10 shadow-lg flex items-center justify-center gap-3">
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

export default HomeworksSlot;
