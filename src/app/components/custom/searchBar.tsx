"use client";

import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type SearchBarProps = {
  visible: boolean;
  onClose?: () => void;
};

const SearchBar = ({ visible, onClose }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (visible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [visible]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current?.value.trim();
    if (value) {
      router.push(`/search/${encodeURIComponent(value)}`);
     onClose?.();
    }
  };

  return (
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
        ${visible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}
        md:right-8
      `}
    >
      <Paper
        component="form"
        className="flex items-center px-4 py-1"
        elevation={0}
        onSubmit={handleSubmit}
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
  );
};

export default SearchBar;
