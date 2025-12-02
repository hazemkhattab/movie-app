"use client";

import { useEffect, useState, useRef } from "react";
import { MovieCard } from "./MovieCard";
import Loader from "./Loader";

function SearchMovie() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      setIsLoading(true);
      const delay = setTimeout(async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_MAIN_API_URL}/3/search/movie?api_key=${process.env.NEXT_PUBLIC_MAIN_API_KEY}&query=${searchQuery}`
          );
          const data = await res.json();
          setResults(data.results || []);
        } catch (error) {
          console.error("Search error:", error);
          setResults([]);
        } finally {
          setIsLoading(false);
        }
      }, 500);
      return () => clearTimeout(delay);
    } else {
      setResults([]);
      setIsLoading(false);
    }
  }, [searchQuery]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
        setSearchQuery("");
        setResults([]);
      }
    };

    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
      // Focus input when modal opens
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [searchOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
        setResults([]);
      }
    };

    if (searchOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [searchOpen]);

  return (
    <>
      <button
        onClick={() => setSearchOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
        aria-label="Search movies"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden lg:inline">Search</span>
      </button>

      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 md:pt-32 px-4">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"></div>

          {/* Search Modal */}
          <div
            ref={searchRef}
            className="relative w-full max-w-4xl bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 animate-in slide-in-from-top-4 duration-300 max-h-[80vh] flex flex-col"
          >
            {/* Search Input */}
            <div className="p-4 md:p-6 border-b border-gray-800">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  ref={inputRef}
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for movies..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setResults([]);
                    }}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                    aria-label="Clear search"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              {isLoading ? (
                <div className="flex justify-center items-center py-12">
                  <Loader />
                </div>
              ) : searchQuery.trim().length === 0 ? (
                <div className="text-center py-12">
                  <svg
                    className="w-16 h-16 mx-auto text-gray-600 mb-4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p className="text-gray-400 text-lg">Start typing to search for movies...</p>
                </div>
              ) : results.length > 0 ? (
                <>
                  <h2 className="text-xl font-bold mb-6 text-white">
                    Search Results ({results.length})
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {results.map((movie) => (
                      <div
                        key={movie.id}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery("");
                          setResults([]);
                        }}
                      >
                        <MovieCard movie={movie} />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No movies found. Try a different search term.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchMovie;
