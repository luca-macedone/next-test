"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const HomeworksSlot = () => {
  const [alumns, setAlumns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/alumns")
      .then((res) => {
        console.log(res);
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
        <div className="h-80">
          {!isLoading ? (
            <form
              action=""
              className="pt-5"
            >
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="alumn">Alumn</label>
                {/* <input
                className="bg-slate-200 p-3 rounded-xl mx-1 focus:outline-0"
                type="text"
                name="note_name"
                id="note-name"
              /> */}
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

export default HomeworksSlot;
