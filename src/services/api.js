// TMDB API configuration
const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Check if we have a valid API key
const hasValidApiKey = API_KEY && API_KEY !== 'your_api_key_here' && API_KEY.length > 10;


// Helper function to build image URL
export const getImageUrl = (path) => {
  if (!path) {
    // Return a placeholder image URL for demo purposes
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="300" height="450" viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="450" fill="#1e293b"/>
        <rect x="100" y="150" width="100" height="100" rx="8" fill="#475569"/>
        <path d="M120 180L150 200L180 180V220L150 240L120 220V180Z" fill="#64748b"/>
        <text x="150" y="280" text-anchor="middle" fill="#94a3b8" font-family="Arial" font-size="14">No Image</text>
      </svg>
    `)}`;
  }
  return `${IMAGE_BASE_URL}${path}`;
};

// Fetch popular movies
export const fetchPopularMovies = async (page = 1) => {
  // If no valid API key, return demo data immediately
  if (!hasValidApiKey) {
    console.log('No valid API key found, using demo data');
    return {
      results: [
        {
          id: 1,
          title: "The Shawshank Redemption",
          poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
          overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          release_date: "1994-09-23",
          vote_average: 9.3
        },
        {
          id: 2,
          title: "The Godfather",
          poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
          overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          release_date: "1972-03-24",
          vote_average: 9.2
        },
        {
          id: 3,
          title: "The Dark Knight",
          poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
          overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          release_date: "2008-07-18",
          vote_average: 9.0
        },
        {
          id: 4,
          title: "Inception",
          poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
          overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
          release_date: "2010-07-16",
          vote_average: 8.8
        },
        {
          id: 5,
          title: "Pulp Fiction",
          poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
          overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          release_date: "1994-10-14",
          vote_average: 8.9
        },
        {
          id: 6,
          title: "Forrest Gump",
          poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
          overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
          release_date: "1994-06-23",
          vote_average: 8.8
        }
      ],
      page: 1,
      total_pages: 1
    };
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=en-US`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
   
    return {
      results: [
        {
          id: 1,
          title: "The Shawshank Redemption",
          poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
          overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          release_date: "1994-09-23",
          vote_average: 9.3
        },
        {
          id: 2,
          title: "The Godfather",
          poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
          overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          release_date: "1972-03-24",
          vote_average: 9.2
        },
        {
          id: 3,
          title: "The Dark Knight",
          poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
          overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          release_date: "2008-07-18",
          vote_average: 9.0
        }
      ],
      page: 1,
      total_pages: 1
    };
  }
};

// Search movies
export const searchMovies = async (query, page = 1) => {
  if (!query.trim()) {
    return { results: [], page: 1, total_pages: 0 };
  }
  
  if (!hasValidApiKey) {
    console.log('No valid API key found, using demo search data');
    const demoMovies = [
      {
        id: 1,
        title: "The Shawshank Redemption",
        poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        release_date: "1994-09-23",
        vote_average: 9.3
      },
      {
        id: 2,
        title: "The Godfather",
        poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        release_date: "1972-03-24",
        vote_average: 9.2
      },
      {
        id: 3,
        title: "The Dark Knight",
        poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        release_date: "2008-07-18",
        vote_average: 9.0
      },
      {
        id: 4,
        title: "Inception",
        poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        release_date: "2010-07-16",
        vote_average: 8.8
      },
      {
        id: 5,
        title: "Pulp Fiction",
        poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        release_date: "1994-10-14",
        vote_average: 8.9
      }
    ];
    
    return {
      results: demoMovies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase())
      ),
      page: 1,
      total_pages: 1
    };
  }
  
  try {
    const response = await fetch(
      `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}&language=en-US`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching movies:', error);

    const demoMovies = [
      {
        id: 4,
        title: "Inception",
        poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        release_date: "2010-07-16",
        vote_average: 8.8
      },
      {
        id: 5,
        title: "Pulp Fiction",
        poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        release_date: "1994-10-14",
        vote_average: 8.9
      }
    ];
    
    return {
      results: demoMovies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase())
      ),
      page: 1,
      total_pages: 1
    };
  }
};

// Get movie details
export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
