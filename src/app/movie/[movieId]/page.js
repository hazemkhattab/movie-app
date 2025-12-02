"use client";
import Loader from "@/app/components/Loader";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_MAIN_API_URL}/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_MAIN_API_KEY}`,
          {
            cache: "force-cache",
          }
        );
        const data = await res.json();
        setMovie(data);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const ratingColor = (rating) => {
    if (rating >= 7) return "text-green-500";
    if (rating >= 5) return "text-yellow-500";
    return "text-red-500";
  };

  const rating = movie?.vote_average;

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  if (!movie) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-400 text-xl">No movie found</p>
        <Link
          href="/movies?page=1"
          className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors"
        >
          ← Back to Movies
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-7xl">
        {/* Back Button */}
        <Link
          href="/movies?page=1"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back to Movies
        </Link>

        {/* Hero Backdrop */}
        {movie.backdrop_path && (
          <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-8 md:mb-12 shadow-2xl">
            <Image
              fill
              alt={movie.title}
              className="object-cover"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Poster & Quick Facts */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="rounded-2xl overflow-hidden shadow-2xl mb-6 border border-gray-700/50">
                <Image
                  width={400}
                  height={600}
                  alt={movie.title}
                  className="w-full h-auto"
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "/placeholder-movie.jpg"
                  }
                />
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold mb-6 text-white">Quick Facts</h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                    <span className="text-gray-400 text-sm">Status</span>
                    <span className="font-semibold text-white">{movie.status}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                    <span className="text-gray-400 text-sm">Release Date</span>
                    <span className="font-semibold text-white">
                      {new Date(movie.release_date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                    <span className="text-gray-400 text-sm">Budget</span>
                    <span className="font-semibold text-white">
                      {movie.budget > 0
                        ? formatCurrency(movie.budget)
                        : "Not disclosed"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                    <span className="text-gray-400 text-sm">Revenue</span>
                    <span className="font-semibold text-white">
                      {movie.revenue > 0
                        ? formatCurrency(movie.revenue)
                        : "Not disclosed"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-400 text-sm">Adult Content</span>
                    <span
                      className={`font-semibold ${
                        movie.adult ? "text-red-400" : "text-green-400"
                      }`}
                    >
                      {movie.adult ? "Yes" : "No"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {movie.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className={`text-2xl md:text-3xl font-bold ${ratingColor(rating)} flex items-center gap-2`}>
                  <span>★</span>
                  <span>{rating.toFixed(1)}/10</span>
                </div>
                <span className="text-gray-400 text-sm md:text-base">
                  ({movie.vote_count?.toLocaleString() || 0} votes)
                </span>
                <span className="text-gray-600">•</span>
                <span className="text-gray-400 text-sm md:text-base">
                  Popularity: {Math.round(movie.popularity)}
                </span>
              </div>

              {movie.tagline && (
                <p className="text-xl md:text-2xl text-gray-300 italic mb-6 border-l-4 border-blue-500 pl-4">
                  "{movie.tagline}"
                </p>
              )}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Overview</h2>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {movie.overview}
              </p>
            </div>

            {movie.genres && movie.genres.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg shadow-blue-500/25"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {movie.belongs_to_collection && (
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Part of Collection</h3>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <p className="font-semibold text-lg md:text-xl text-white">
                    {movie.belongs_to_collection.name}
                  </p>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {movie.production_companies &&
                movie.production_companies.length > 0 && (
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-bold mb-4 text-white">
                      Production Companies
                    </h3>
                    <div className="space-y-3">
                      {movie.production_companies.map((company) => (
                        <div
                          key={company.id}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors"
                        >
                          {company.logo_path && (
                            <Image
                              width={40}
                              height={40}
                              alt={company.name}
                              src={`https://image.tmdb.org/t/p/w92${company.logo_path}`}
                              className="rounded bg-gray-700 p-1"
                            />
                          )}
                          <span className="text-gray-300">{company.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {movie.production_countries &&
                movie.production_countries.length > 0 && (
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-bold mb-4 text-white">
                      Production Countries
                    </h3>
                    <div className="space-y-2">
                      {movie.production_countries.map((country) => (
                        <div
                          key={country.iso_3166_1}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors"
                        >
                          <span className="text-2xl">🌍</span>
                          <span className="text-gray-300">{country.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {movie.spoken_languages && movie.spoken_languages.length > 0 && (
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold mb-4 text-white">Spoken Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.spoken_languages.map((language) => (
                      <span
                        key={language.iso_639_1}
                        className="bg-gray-700/50 px-4 py-2 rounded-full text-sm text-gray-300 border border-gray-600/50"
                      >
                        {language.english_name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold mb-4 text-white">External Links</h3>
                <div className="space-y-3">
                  {movie.homepage && (
                    <a
                      href={movie.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors p-2 rounded-lg hover:bg-gray-700/30 group"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="group-hover:underline">Official Website</span>
                    </a>
                  )}
                  {movie.imdb_id && (
                    <a
                      href={`https://www.imdb.com/title/${movie.imdb_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition-colors p-2 rounded-lg hover:bg-gray-700/30 group"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.68 2.5h-2.56v19h2.56V2.5zm-6.25 0H9.87v19h2.56V2.5zm-6.25 0H3.62v19h2.56V2.5z" />
                      </svg>
                      <span className="group-hover:underline">IMDb Page</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {movie.original_language?.toUpperCase() || "N/A"}
                </div>
                <div className="text-gray-400 text-sm">Original Language</div>
              </div>

              <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-green-400 mb-2">
                  {movie.origin_country?.join(", ") || "N/A"}
                </div>
                <div className="text-gray-400 text-sm">Origin Country</div>
              </div>

              <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  {movie.video ? "Yes" : "No"}
                </div>
                <div className="text-gray-400 text-sm">Has Video</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
