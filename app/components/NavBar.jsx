"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import SideBar from "./SideBar";
import Image from "next/image";

const navLinks = [
  {
    path: "/components/About",
    title: "About",
  },
  {
    path: "/components/Projects",
    title: "Projects",
  },
  {
    path: "/components/Contact",
    title: "Contact",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 md:top-6 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex container border border-[#33353F] flex-wrap items-center justify-between mx-auto px-6 md:px-14 rounded-full shadow-lg shadow-warmGray-700">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            src="/Images/logo.gif"
            width={30}
            height={30}
            className="h-12 md:h-16 w-12 md:w-16 z-20 transition-transform duration-300 ease-in-out transform-gpu hover:scale-150"
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen ? <SideBar links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
