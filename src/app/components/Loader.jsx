import React from "react";

function Loader() {
  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center py-12">
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="w-16 h-16 border-4 border-gray-800 rounded-full animate-spin border-t-blue-500 border-r-purple-500"></div>
        {/* Inner spinning ring */}
        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent rounded-full animate-spin border-t-purple-500 border-r-pink-500" style={{ animationDirection: "reverse", animationDuration: "0.8s" }}></div>
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>
      <p className="text-gray-400 text-sm font-medium animate-pulse">Loading...</p>
    </div>
  );
}

export default Loader;
