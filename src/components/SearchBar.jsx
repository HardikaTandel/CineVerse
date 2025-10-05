import { useState } from 'react';
import React from 'react';
import { MdClose } from 'react-icons/md';


const SearchBar = ({ onSearch, placeholder = "Search for movies..." }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">

        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-200 text-lg"
        />
        
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
          >
            <MdClose className="h-5 w-5" />
          </button>
        )}
      </div>
      
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-xl font-medium transition-colors duration-200 hidden sm:block"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
