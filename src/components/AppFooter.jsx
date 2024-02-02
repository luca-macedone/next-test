import React from "react";
import Link from "next/link";
import links from "@/data/links";
import Image from "next/image";

export default function AppFooter() {
  return (
    <footer className="bg-secondary text-white w-full">
      <div className="container mx-auto px-2 lg:px-0">
        <div className="flex items-start gap-10 py-10">
          <Image
            src="/logo.svg"
            height="60"
            width="60"
            alt="logo"
            className="w-20"
          />
          <div className="">
            <h5 className="text-lg font-bold">Links</h5>
            <ul className="">
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
      </div>
    </footer>
  );
}
