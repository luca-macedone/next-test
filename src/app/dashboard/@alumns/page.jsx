"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const alumn = {
  createdAt: "2024-01-29T09:08:34.167Z",
  name: "Sarah Ondricka",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/233.jpg",
  id: "1",
};

const AlumnsSlot = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      await axios
        .get("/api/alumns")
        .then((response) => {
          setData(response.data);
          // console.log(data);
          // console.log(response);
        })
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="w-full shadow-lg rounded-3xl p-5 bg-slate-50">
        <h2 className="text-xl font-semibold border-b py-3 px-5 shadow-lg rounded-xl">
          Alumns
        </h2>
        <div className="h-80 overflow-y-auto">
          <ul className="py-1">
            {!isLoading ? (
              data.length > 0 ? (
                data.map((alumn) => {
                  // console.log(alumn);
                  return (
                    <li
                      className="flex items-center gap-4 shadow-lg rounded-3xl px-3 py-2 mx-3 my-5 bg-zinc-100"
                      key={alumn.id}
                    >
                      <div>
                        <img
                          src={alumn.avatar}
                          alt={alumn.name}
                          className="rounded-full h-20"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <h5>{alumn.name}</h5>
                          <small className="italic">{alumn.class}</small>
                        </div>
                        <Link
                          href={`/dashboard/details/${alumn.id}`}
                          className="bg-primary text-white uppercase font-semibold px-6 py-1 rounded-lg hover:bg-secondary transition-colors duration-200 ease-in-out"
                        >
                          details
                        </Link>
                      </div>
                    </li>
                  );
                })
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <h2 className="bg-zinc-100 w-full rounded-lg py-5 mx-1 shadow-lg text-center">
                    Nothing here...yet!
                  </h2>
                </div>
              )
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <h2 className="bg-zinc-100 rounded-xl shadow-lg flex items-center justify-center gap-3 w-full py-5 mx-1">
                  Loading...
                  <span className="material-symbols-outlined animate-spin">
                    progress_activity
                  </span>
                </h2>
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AlumnsSlot;
