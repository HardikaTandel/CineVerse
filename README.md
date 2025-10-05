# 🎬 CineVerse - Movie Library

A beautiful, modern movie discovery app built with React, Vite, and Tailwind CSS. Discover movies, create your personal watchlist, and never miss a great film again.

## ✨ Features

- **Movie Discovery**: Browse popular movies from The Movie Database (TMDB)
- **Smart Search**: Search for movies by title with real-time results
- **Personal Watchlist**: Add movies to your watchlist with localStorage persistence
- **Beautiful UI**: Unique, human-crafted design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Client-side Routing**: Navigate between Home and Watchlist views

## 🚀 Getting Started

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd movie-library
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Get a free TMDB API key:**
   - Visit [TMDB API](https://www.themoviedb.org/settings/api)
   - Create a free account and request an API key
   - Create a `.env` file in the project root:
   ```bash
   VITE_TMDB_API_KEY=your_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173`

## 🎯 Usage

1. **Browse Movies**: The homepage loads with popular movies automatically
2. **Search**: Use the search bar to find specific movies
3. **Add to Watchlist**: Click the heart icon or "Add to Watchlist" button
4. **View Watchlist**: Navigate to the Watchlist page to see your saved movies
5. **Remove Movies**: Remove movies from your watchlist anytime



## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── MovieCard.jsx       # Individual movie card
│   ├── MovieGrid.jsx       # Grid layout for movies
│   └── SearchBar.jsx       # Search input component
├── hooks/
│   └── useWatchlist.js     # Custom hook for watchlist management
├── pages/
│   ├── HomePage.jsx        # Home page with movie discovery
│   └── WatchlistPage.jsx   # Watchlist page
├── services/
│   └── api.js              # TMDB API integration
├── App.jsx                 # Main app component
├── main.ts                 # App entry point
└── style.css               # Global styles and Tailwind imports
```

## 🎨 Design Features

- **Unique Color Palette**: Custom cinema-inspired colors
- **Glass Morphism**: Modern backdrop blur effects
- **Smooth Animations**: Hover effects and transitions
- **Custom Scrollbars**: Styled scrollbars for better UX
- **Responsive Grid**: Adaptive movie grid layout
- **Loading States**: Skeleton loaders for better perceived performance


## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Bonus Features Implemented

- ✅ Remove movies from watchlist
- ✅ Client-side routing with React Router
- ✅ State management with custom hooks
- ✅ LocalStorage persistence
- ✅ Responsive design
- ✅ Loading states and error handling
- ✅ Beautiful animations and transitions


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Happy Movie Watching! 🍿**
