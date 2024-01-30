import React from "react";
import Link from "next/link";

export default function AppNavbar() {
  return (
    <header className="bg-slate-50 w-full shadow-lg">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <h5 className="text-lg font-bold uppercase">Header</h5>
        <ul className="flex items-center justify-end gap-2">
          <li>
            <Link href="/dashboard">Home</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
