"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);


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

      <div
        className={`
          absolute top-full right-4 mt-2
          w-full max-w-sm
          bg-white
          rounded-full
          shadow-lg
          overflow-hidden
          transform
          origin-top-right
          transition-all duration-300 ease-in-out
          ${showSearch ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}
          md:right-8
        `}
        style={{ transformOrigin: "top right" }}
      >
        <Paper
          component="form"
          className="flex items-center px-4 py-1"
          elevation={0}
          onSubmit={(e) => e.preventDefault()}
        >
          <InputBase
            inputRef={inputRef}
            placeholder="Buscar personaje..."
            className="flex-grow text-gray-700 placeholder-gray-400"
            inputProps={{ "aria-label": "Buscar personaje" }}
            sx={{
              fontSize: "1rem",
              padding: "6px 8px",
            }}
          />
          <IconButton type="submit" aria-label="Buscar">
            <SearchIcon color="primary" />
          </IconButton>
        </Paper>
      </div>
    </nav>
  );
};

export default Navbar;
