"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky bg-white w-full z-20 top-0 start-0 border-b border-default border-gray-300 items-center justify-center mx-auto p-4">
      <Link
        href="/"
        className={`px-4 transition-colors duration-200 hover:text-blue-500 ${pathname === "/" ? "font-bold text-blue-500" : "text-gray-700"}`}
      >
        All
      </Link>
      <Link
        href="/active"
        className={`px-4 transition-colors duration-200 hover:text-blue-500 ${pathname === "/active" ? "font-bold text-blue-500" : "text-gray-700"}`}
      >
        Active Tasks
      </Link>
      <Link
        href="/completed"
        className={`px-4 transition-colors duration-200 hover:text-blue-500 ${pathname === "/completed" ? "font-bold text-blue-500" : "text-gray-700"}`}
      >
        Completed Tasks
      </Link>
    </nav>
  );
};

export default NavBar;
