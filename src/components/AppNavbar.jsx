import React from "react";
import Link from "next/link";

export default function AppNavbar() {
  return (
    <header className="bg-slate-50 w-full shadow-lg">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <h5 className="text-lg font-bold uppercase underline underline-offset-4">
          Teacher Dashboard
        </h5>
        <ul className="flex items-center justify-end gap-2">
          <li>
            <Link
              href="/"
              className="p-2 rounded-md border border-transparent hover:border-slate-800 transition-colors ease-in-out duration-200 uppercase"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="p-2 rounded-md border border-transparent hover:border-slate-800 transition-colors ease-in-out duration-200 uppercase"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
