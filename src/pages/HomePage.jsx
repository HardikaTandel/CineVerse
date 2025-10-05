import { useState, useEffect } from 'react';
import React from 'react';

import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import { fetchPopularMovies, searchMovies } from '../services/api';

const HomePage = ({ addToWatchlist, removeFromWatchlist, isInWatchlist }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Load popular movies on component mount
  useEffect(() => {
    loadPopularMovies();
  }, []);

  const loadPopularMovies = async () => {
    setIsLoading(true);
    try {
      
      const data = await fetchPopularMovies(1);
   
      setMovies(data.results || []);
      setTotalPages(data.total_pages || 1);
      setCurrentPage(1);
    } catch (error) {
      console.error(' Error loading popular movies:', error);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    
    if (!query.trim()) {
      loadPopularMovies();
      return;
    }

    setIsLoading(true);
    try {
      const data = await searchMovies(query, 1);
      setMovies(data.results || []);
      setTotalPages(data.total_pages || 1);
    } catch (error) {
      console.error('Error searching movies:', error);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreMovies = async () => {
    if (currentPage >= totalPages) return;

    setIsLoading(true);
    try {
      const nextPage = currentPage + 1;
      let data;
      
      if (searchQuery.trim()) {
        data = await searchMovies(searchQuery, nextPage);
      } else {
        data = await fetchPopularMovies(nextPage);
      }

      setMovies(prev => [...prev, ...(data.results || [])]);
      setCurrentPage(nextPage);
      setTotalPages(data.total_pages || 1);
    } catch (error) {
      console.error('Error loading more movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
     
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Discover Your Next
              <span className="block bg-gradient-to-r from-cinema-400 to-cinema-600 bg-clip-text text-transparent">
                Favorite Movie
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-dark-300 max-w-2xl mx-auto leading-relaxed">
              Explore thousands of movies, create your personal watchlist, and never miss a great film again.
            </p>
            
            {/* Search Bar */}
            <div className="mt-8">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search for movies, genres..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Movies Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {searchQuery && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Search Results for "{searchQuery}"
              </h2>
              <p className="text-dark-400">
                {movies.length} {movies.length === 1 ? 'movie' : 'movies'} found
              </p>
            </div>
          )}

          {!searchQuery && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Popular Movies
              </h2>
              <p className="text-dark-400">
                Trending movies everyone's watching right now
              </p>
            </div>
          )}

          {/* Movie Grid */}
          <MovieGrid
            movies={movies}
            onAddToWatchlist={addToWatchlist}
            onRemoveFromWatchlist={removeFromWatchlist}
            isInWatchlist={isInWatchlist}
            isLoading={isLoading}
          />

          {/* Load More Button */}
          {!isLoading && movies.length > 0 && currentPage < totalPages && (
            <div className="text-center mt-12">
              <button
                onClick={loadMoreMovies}
                className="bg-gradient-to-r from-cinema-500 to-cinema-600 hover:from-cinema-600 hover:to-cinema-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cinema-500/25"
              >
                Load More Movies
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
