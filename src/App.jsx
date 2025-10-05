import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useWatchlist } from './hooks/useWatchlist';
import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import WatchlistPage from './pages/WatchlistPage';

function App() {
  const { watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist, clearWatchlist, watchlistCount } = useWatchlist();

  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <Header watchlistCount={watchlistCount} />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage 
              addToWatchlist={addToWatchlist}
              removeFromWatchlist={removeFromWatchlist}
              isInWatchlist={isInWatchlist}
            />} />
            <Route path="/watchlist" element={<WatchlistPage 
              watchlist={watchlist}
              addToWatchlist={addToWatchlist}
              removeFromWatchlist={removeFromWatchlist}
              isInWatchlist={isInWatchlist}
              clearWatchlist={clearWatchlist}
            />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
