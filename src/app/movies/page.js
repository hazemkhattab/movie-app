import { MovieCard } from "../components/MovieCard";
import Pagination from "../components/Pagination";
import SearchMovie from "../components/SearchMovie";

async function getMovies(page) {
  try {
    // Call TMDB API directly instead of going through our own API route
    const apiUrl = process.env.TMDB_API_URL || process.env.NEXT_PUBLIC_MAIN_API_URL || 'https://api.themoviedb.org';
    const apiKey = process.env.TMDB_API_KEY || process.env.NEXT_PUBLIC_MAIN_API_KEY;
    
    if (!apiKey) {
      console.error('TMDB API key is not configured');
      return { results: [], total_pages: 0 };
    }

    const url = `${apiUrl}/3/movie/popular?api_key=${apiKey}&page=${page}`;
    
    const res = await fetch(url, { 
      cache: "no-store"
    });
    
    if (!res.ok) {
      console.error('TMDB API Error:', res.status);
      return { results: [], total_pages: 0 };
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return { results: [], total_pages: 0 };
  }
}

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const moviesData = await getMovies(currentPage);

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                Popular Movies
              </h1>
              <p className="text-gray-400 text-sm md:text-base">
                Discover the most popular movies right now
              </p>
            </div>
            <div className="flex items-center gap-4">
              <SearchMovie />
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span>
              Page {currentPage} of {moviesData.total_pages}
            </span>
            <span>•</span>
            <span>
              {moviesData.total_results?.toLocaleString() || 0} total movies
            </span>
          </div>
        </div>

        {/* Movies Grid */}
        {moviesData.results && moviesData.results.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
              {moviesData.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={moviesData.total_pages}
            />
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No movies found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
