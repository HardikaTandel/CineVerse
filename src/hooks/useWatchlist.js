import { useState, useEffect } from 'react';

const WATCHLIST_KEY = 'movie-watchlist';

export const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  // Load watchlist from localStorage on mount
  useEffect(() => {
    const savedWatchlist = localStorage.getItem(WATCHLIST_KEY);
    if (savedWatchlist) {
      try {
        setWatchlist(JSON.parse(savedWatchlist));
      } catch (error) {
        console.error('Error parsing watchlist from localStorage:', error);
        setWatchlist([]);
      }
    }
  }, []);

  // Save watchlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movie) => {
    console.log('Adding movie to watchlist:', movie.title);
    setWatchlist(prev => {
      // Check if movie is already in watchlist
      const isAlreadyInWatchlist = prev.some(item => item.id === movie.id);
      if (isAlreadyInWatchlist) {
        return prev; 
      }

      return [...prev, { ...movie, addedAt: new Date().toISOString() }];
    });
  };

  const removeFromWatchlist = (movieId) => {
    setWatchlist(prev => prev.filter(movie => movie.id !== movieId));
  };

  const isInWatchlist = (movieId) => {
    return watchlist.some(movie => movie.id === movieId);
  };

  const clearWatchlist = () => {
    setWatchlist([]);
  };

  return {
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    clearWatchlist,
    watchlistCount: watchlist.length
  };
};
