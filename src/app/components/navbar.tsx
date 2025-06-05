"use client";

import Link from "next/link";
import { useState } from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "./custom/searchBar";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="bg-white shadow-md rounded-full max-w-4xl mx-auto mt-4 px-4 py-2 flex items-center justify-between md:px-8 relative">
      <div className="flex space-x-6 text-gray-800 font-semibold text-lg">
        <Link href="/" className="hover:text-indigo-600 transition">
          Home
        </Link>
        <Link href="/favoritos" className="hover:text-indigo-600 transition">
          Favoritos
        </Link>
      </div>

      <IconButton
        onClick={() => setShowSearch((prev) => !prev)}
        className="text-gray-600"
        aria-label="Toggle search"
      >
        <SearchIcon />
      </IconButton>

      <SearchBar visible={showSearch} onClose={() => setShowSearch(false)} />
    </nav>
  );
};

export default Navbar;
