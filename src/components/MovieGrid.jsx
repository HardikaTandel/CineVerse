import MovieCard from './MovieCard';
import React from 'react';


const MovieGrid = ({ movies, onAddToWatchlist, onRemoveFromWatchlist, isInWatchlist, showRemoveButton = false, isLoading = false }) => {
 
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="bg-dark-800/50 border border-dark-700/50 rounded-2xl overflow-hidden animate-pulse">
            <div className="aspect-[2/3] bg-dark-700 shimmer"></div>
            <div className="p-4 space-y-3">
              <div className="h-5 bg-dark-700 shimmer rounded"></div>
              <div className="h-4 bg-dark-700 shimmer rounded w-1/2"></div>
              <div className="space-y-2">
                <div className="h-3 bg-dark-700 shimmer rounded"></div>
                <div className="h-3 bg-dark-700 shimmer rounded"></div>
                <div className="h-3 bg-dark-700 shimmer rounded w-2/3"></div>
              </div>
              <div className="h-10 bg-dark-700 shimmer rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 mx-auto mb-6 bg-dark-800/50 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No movies found</h3>
        <p className="text-dark-400">Try adjusting your search or check back later for new releases.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAddToWatchlist={onAddToWatchlist}
          onRemoveFromWatchlist={onRemoveFromWatchlist}
          isInWatchlist={isInWatchlist(movie.id)}
          showRemoveButton={showRemoveButton}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
