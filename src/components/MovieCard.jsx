import { Heart, Calendar, Star, Plus, Check } from 'lucide-react';
import { getImageUrl } from '../services/api';
import React from 'react';


const MovieCard = ({ movie, onAddToWatchlist, onRemoveFromWatchlist, isInWatchlist, showRemoveButton = false }) => {
  const handleWatchlistToggle = () => {
    if (isInWatchlist) {
      onRemoveFromWatchlist(movie.id);
    } else {
      onAddToWatchlist(movie);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).getFullYear();
  };

  return (
    <div className="group relative bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cinema-500/10 hover:border-cinema-500/30">
      {/* Movie Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDMwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjMzM0MTU1Ii8+CjxwYXRoIGQ9Ik0xMjUgMTc1SDIwMFYyMDBIMTI1VjE3NVoiIGZpbGw9IiM2NDc0OGIiLz4KPHBhdGggZD0iTTE0NSAxNTBIMTgwVjIyNUgxNDVWMTUwWiIgZmlsbD0iIzY0NzQ4YiIvPgo8L3N2Zz4K';
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action buttons */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleWatchlistToggle}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
              isInWatchlist 
                ? 'bg-cinema-500 text-white shadow-lg shadow-cinema-500/30' 
                : 'bg-dark-800/80 text-white hover:bg-cinema-500 hover:shadow-lg hover:shadow-cinema-500/30'
            }`}
            title={isInWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
          >
            {isInWatchlist ? <Check size={16} /> : <Plus size={16} />}
          </button>
        </div>

        {/* Rating badge */}
        {movie.vote_average && (
          <div className="absolute top-3 left-3 bg-dark-900/80 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
            <Star size={12} className="text-yellow-400 fill-current" />
            <span className="text-xs font-medium text-white">
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
        )}
      </div>

      {/* Movie Info */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-white text-lg leading-tight line-clamp-2 group-hover:text-cinema-300 transition-colors duration-200">
            {movie.title}
          </h3>
          <div className="flex items-center gap-2 mt-1 text-dark-400 text-sm">
            <Calendar size={14} />
            <span>{formatDate(movie.release_date)}</span>
          </div>
        </div>

        {movie.overview && (
          <p className="text-dark-300 text-sm line-clamp-3 leading-relaxed">
            {movie.overview}
          </p>
        )}

        {/* Bottom action */}
        <div className="pt-2">
          <button
            onClick={handleWatchlistToggle}
            className={`w-full py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
              isInWatchlist
                ? 'bg-cinema-500/20 text-cinema-300 border border-cinema-500/30 hover:bg-cinema-500/30'
                : 'bg-dark-700/50 text-dark-300 border border-dark-600/50 hover:bg-cinema-500/20 hover:text-cinema-300 hover:border-cinema-500/30'
            }`}
          >
            {isInWatchlist ? (
              <>
                <Check size={16} />
                In Watchlist
              </>
            ) : (
              <>
                <Heart size={16} />
                Add to Watchlist
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
