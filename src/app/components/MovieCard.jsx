import Image from "next/image";
import Link from "next/link";

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export function MovieCard({ movie }) {
  const rating = Math.round(movie.vote_average * 10);
  const getRatingColor = (rating) => {
    if (rating >= 70) return "bg-green-500";
    if (rating >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Link href={`/movie/${movie.id}`} className="block h-full">
      <div className="group relative h-full flex flex-col bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[2/3] bg-gray-900">
          <Image
            width={400}
            height={600}
            alt={movie.title || "Movie poster"}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/placeholder-movie.jpg"
            }
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Rating Badge */}
          <div className="absolute top-3 right-3 z-10">
            <div
              className={`${getRatingColor(
                rating
              )} text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg backdrop-blur-sm`}
            >
              <span>★</span>
              <span>{rating}%</span>
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-xl">
                View Details →
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 flex flex-col">
          <h3 className="font-bold text-lg text-white line-clamp-2 mb-2 group-hover:text-blue-400 transition-colors">
            {movie.title}
          </h3>

          <div className="flex items-center text-gray-400 text-sm mb-3">
            <svg
              className="w-4 h-4 mr-1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(movie.release_date)}
          </div>

          <div className="flex items-center justify-between text-sm mb-3 text-gray-400">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>{movie.vote_count?.toLocaleString() || 0} votes</span>
            </div>
          </div>

          {movie.overview && (
            <p className="text-gray-400 text-sm line-clamp-3 flex-1">
              {movie.overview}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
