import { Film, Bookmark, Home } from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ watchlistCount }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/watchlist', label: 'Watchlist', icon: Bookmark, badge: watchlistCount }
  ];

  return (
    <header className="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-lg border-b border-dark-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-br from-cinema-500 to-cinema-600 rounded-xl group-hover:scale-110 transition-transform duration-200">
              <Film className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white group-hover:text-cinema-300 transition-colors duration-200">
                CineVerse
              </h1>
              <p className="text-xs text-dark-400 -mt-1">Your Movie Universe</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-cinema-500/20 text-cinema-300'
                      : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden sm:block">{item.label}</span>
                  
                  { item.badge > 0 && (
                    <span className="absolute -top-1 -right-1 bg-cinema-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                      {item.badge > 99 ? '99+' : item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
