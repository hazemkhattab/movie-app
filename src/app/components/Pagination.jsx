"use client";
import Link from "next/link";

function Pagination({ currentPage, totalPages }) {
  // Generate page numbers to show (current page ± 2 pages)
  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-12 mb-8">
      {/* First Page */}
      {currentPage > 3 && (
        <>
          <Link
            href={`/movies?page=1`}
            className="px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 text-white font-medium transition-all duration-200 border border-gray-700 hover:border-blue-500"
          >
            1
          </Link>
          {currentPage > 4 && (
            <span className="px-2 text-gray-500">...</span>
          )}
        </>
      )}

      {/* Previous Button */}
      {currentPage > 1 && (
        <Link
          href={`/movies?page=${currentPage - 1}`}
          className="px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 text-white font-medium transition-all duration-200 border border-gray-700 hover:border-blue-500 flex items-center gap-1"
          aria-label="Previous page"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </Link>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <Link
          key={page}
          href={`/movies?page=${page}`}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 border ${
            page === currentPage
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500 shadow-lg shadow-blue-500/25"
              : "bg-gray-800/50 hover:bg-gray-700 text-white border-gray-700 hover:border-blue-500"
          }`}
          aria-label={`Go to page ${page}`}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </Link>
      ))}

      {/* Next Button */}
      {currentPage < totalPages && (
        <Link
          href={`/movies?page=${currentPage + 1}`}
          className="px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 text-white font-medium transition-all duration-200 border border-gray-700 hover:border-blue-500 flex items-center gap-1"
          aria-label="Next page"
        >
          Next
          <svg
            className="w-4 h-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}

      {/* Last Page */}
      {currentPage < totalPages - 2 && (
        <>
          {currentPage < totalPages - 3 && (
            <span className="px-2 text-gray-500">...</span>
          )}
          <Link
            href={`/movies?page=${totalPages}`}
            className="px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 text-white font-medium transition-all duration-200 border border-gray-700 hover:border-blue-500"
          >
            {totalPages}
          </Link>
        </>
      )}

      {/* Page Info */}
      <div className="w-full text-center mt-4 text-gray-400 text-sm">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}

export default Pagination;
