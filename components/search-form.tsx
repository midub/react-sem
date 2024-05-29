"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  return (
    <form className="relative">
      <input
        type="search"
        name="search"
        placeholder="Search cars"
        className="p-2 pr-16"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-blue absolute right-0 top-0 bottom-0 border border-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  );
}
