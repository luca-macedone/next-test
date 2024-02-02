import React from "react";
import Link from "next/link";
import links from "@/data/links";

export default function AppFooter() {
  return (
    <footer className="bg-zinc-600 text-zinc-50 w-full">
      <div className="container mx-auto">
        <div className="py-5">
          <h5 className="text-lg font-bold">Links</h5>
          <ul>
            {links.map((link) => {
              return (
                <li key={link.href}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
