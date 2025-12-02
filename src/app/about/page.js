import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen text-white py-12 md:py-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About CinemaHub
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Your ultimate destination for movie discovery and information
          </p>
        </div>

        {/* Mission & Features */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-400">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
              CineHub is dedicated to providing movie enthusiasts with a
              comprehensive platform to discover, explore, and learn about
              films from around the world. We believe in the power of cinema
              to inspire, entertain, and connect people.
            </p>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Our platform leverages the extensive database of The Movie
              Database (TMDB) to bring you accurate, up-to-date information
              about your favorite movies, actors, and filmmakers.
            </p>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-purple-400">
                What We Offer
              </h2>
            </div>
            <ul className="text-gray-300 space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-base md:text-lg">Extensive movie database with detailed information</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-base md:text-lg">User ratings and reviews</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-base md:text-lg">Similar movie recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-base md:text-lg">Fast and intuitive search functionality</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <div className="text-center p-6 md:p-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/25">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Vast Collection</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Access thousands of movies from classic films to latest releases
            </p>
          </div>

          <div className="text-center p-6 md:p-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/25">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Fast & Reliable</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Quick access to movie information with reliable data sources
            </p>
          </div>

          <div className="text-center p-6 md:p-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/25">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Community Driven</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Powered by community contributions and reviews
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl p-8 md:p-12 border border-gray-700/50">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Ready to Explore?
          </h2>
          <p className="text-gray-300 mb-6 text-base md:text-lg">
            Start discovering amazing movies today
          </p>
          <Link
            href="/movies?page=1"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
          >
            Browse Movies
          </Link>
        </div>
      </section>
    </main>
  );
}
