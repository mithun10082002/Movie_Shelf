import { useState } from "react";
import "./App.css";
import movies from "./data/movies.json";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

const FAVORITES_STORAGE_KEY = "movie-shelf-favorite-ids";

function getSavedFavoriteIds() {
  const savedFavoriteIds = localStorage.getItem(FAVORITES_STORAGE_KEY);
  if (!savedFavoriteIds) return [];

  try {
    const parsedFavoriteIds = JSON.parse(savedFavoriteIds);
    return Array.isArray(parsedFavoriteIds)
      ? parsedFavoriteIds.filter((id) => movies.some((movie) => movie.id === id))
      : [];
  } catch {
    return [];
  }
}

function App() {
  const [favoriteMovieIds, setFavoriteMovieIds] = useState(getSavedFavoriteIds);
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

  function toggleFavorite(movieId) {
    setFavoriteMovieIds((currentFavoriteIds) => {
      const updatedFavoriteIds = currentFavoriteIds.includes(movieId)
        ? currentFavoriteIds.filter((id) => id !== movieId)
        : [...currentFavoriteIds, movieId];
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updatedFavoriteIds));
      return updatedFavoriteIds;
    });
  }

  let page;
  if (currentPath === "/favorites") {
    page = (
      <Favorites
        movies={movies}
        favoriteMovieIds={favoriteMovieIds}
        onToggleFavorite={toggleFavorite}
      />
    );
  } else if (currentPath === "/about") {
    page = <About />;
  } else {
    page = (
      <Home
        movies={movies}
        favoriteMovieIds={favoriteMovieIds}
        onToggleFavorite={toggleFavorite}
      />
    );
  }

  return (
    <div className="app">
      <NavBar currentPath={currentPath} favoriteCount={favoriteMovieIds.length} />
      {page}
      <footer className="site-footer">
        <p>Movie Shelf <span aria-hidden="true">·</span> Made for movie lovers.</p>
      </footer>
    </div>
  );
}

export default App;
