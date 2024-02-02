import React from "react";
import Link from "next/link";
import links from "@/data/links";

export default function AppNavbar() {
  return (
    <header className="bg-slate-50 w-full shadow-lg">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <h5 className="text-lg font-bold uppercase underline underline-offset-4">
          Teacher Dashboard
        </h5>
        <ul className="flex items-center justify-end gap-2">
          {links.map((link) => {
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="p-2 rounded-md border border-transparent hover:border-slate-800 transition-colors ease-in-out duration-200 uppercase"
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
