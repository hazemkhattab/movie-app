"use client";
import Link from "next/link";
import { useState } from "react";
import SearchMovie from "./SearchMovie";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/80 border-b border-gray-800/50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300">
              🎬 CinemaHub
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="/movies?page=1"
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              Movies
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/about"
              className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Search Bar - Right Side */}
          <div className="hidden md:block">
            <SearchMovie />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800/50 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/movies?page=1"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                Movies
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                About
              </Link>
              <div className="px-4">
                <SearchMovie />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
