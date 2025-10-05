import { Trash2, Calendar, Clock } from 'lucide-react';
import React from 'react';

import MovieGrid from '../components/MovieGrid';

const WatchlistPage = ({ watchlist, removeFromWatchlist, isInWatchlist, clearWatchlist }) => {

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (watchlist.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-20">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-cinema-500/20 to-cinema-600/20 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-cinema-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">Your Watchlist is Empty</h1>
              <p className="text-dark-400 text-lg mb-8 max-w-md mx-auto">
                Start building your personal collection by adding movies you want to watch later.
              </p>
              <a
                href="/"
                className="inline-flex items-center bg-gradient-to-r from-cinema-500 to-cinema-600 hover:from-cinema-600 hover:to-cinema-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Browse Movies
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            My Watchlist {watchlist.length > 0 && `(${watchlist.length})`}
          </h1>
          <p className="text-dark-400">
            {watchlist.length === 0 ? 'No movies saved yet' : `${watchlist.length} ${watchlist.length === 1 ? 'movie' : 'movies'} saved for later`}
          </p>
              </div>
              
              {watchlist.length > 0 && (
                <button
                  onClick={clearWatchlist}
                  className="inline-flex items-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 px-4 py-2 rounded-xl font-medium transition-all duration-200 border border-red-500/30 hover:border-red-500/50"
                >
                  <Trash2 size={16} />
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cinema-500/20 rounded-xl">
                  <Calendar className="h-6 w-6 text-cinema-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{watchlist.length}</p>
                  <p className="text-dark-400 text-sm">Movies to Watch</p>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">
                    {watchlist.length > 0 ? Math.round(watchlist.length * 2.5) : 0}h
                  </p>
                  <p className="text-dark-400 text-sm">Est. Watch Time</p>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">
                    {watchlist.filter(movie => new Date(movie.release_date) < new Date()).length}
                  </p>
                  <p className="text-dark-400 text-sm">Released Movies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Movie Grid */}
          <MovieGrid
            movies={watchlist}
            onAddToWatchlist={() => {}} // No-op since we're in watchlist view
            onRemoveFromWatchlist={removeFromWatchlist}
            isInWatchlist={isInWatchlist}
            showRemoveButton={true}
          />
        </div>
      </div>
    </div>
  );
};

export default WatchlistPage;
