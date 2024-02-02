import React from "react";
import Link from "next/link";
import links from "@/data/links";
import Image from "next/image";

import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function AppNavbar() {
  return (
    <header className="bg-slate-50 w-full shadow-lg">
      <nav className="container mx-auto py-5 flex items-center justify-between px-2 lg:px-0">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.svg"
            height="60"
            width="60"
            alt="logo"
            className="w-20"
          />
          <h5 className="text-lg font-bold uppercase underline underline-offset-4">
            Teachers
          </h5>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex items-center justify-end gap-2">
            {links.map((link) => {
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="p-2 rounded-md bg-transparent border border-transparent hover:bg-primary hover:text-white hover:border-primary transition-colors ease-in-out duration-200 uppercase"
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div>
            <Link
              type="button"
              className="p-3 bg-secondary text-white hover:scale-105 transition-transform duration-150 eas uppercase font-semibold rounded-xl shadow px-5 py-2"
              href="/api/account/google/callback"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
