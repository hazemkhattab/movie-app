import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full border-t border-gray-800/50 bg-black/50 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              🎬 CinemaHub
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for movie discovery and information. 
              Explore thousands of films from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/movies?page=1"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Popular Movies
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Info Section */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Information</h4>
            <p className="text-gray-400 text-sm">
              Powered by{" "}
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                The Movie Database (TMDB)
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800/50 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CinemaHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
