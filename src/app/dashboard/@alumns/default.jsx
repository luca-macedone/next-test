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
          <ul className="py-2">
            {!isLoading &&
              data.map((alumn) => {
                return (
                  <li
                    className="flex items-center gap-4 shadow-lg rounded-3xl p-3 my-5 mx-3 bg-slate-200"
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
                      <h5>{alumn.name}</h5>
                      <Link
                        href={`/dashboard/details/${alumn.id}`}
                        className="uppercase font-semibold"
                      >
                        details
                      </Link>
                    </div>
                  </li>
                );
              })}
            {isLoading && (
              <>
                <h1>Loading...</h1>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AlumnsSlot;
