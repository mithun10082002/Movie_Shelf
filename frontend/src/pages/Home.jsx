import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home({ movies, favoriteMovieIds, onToggleFavorite }) {
  const [searchQuery, setSearchQuery] = useState("");
  const matchingMovies = movies.filter((movie) => {
    const searchableDetails = `${movie.title} ${movie.year} ${movie.genre}`.toLowerCase();
    return searchableDetails.includes(searchQuery.trim().toLowerCase());
  });

  return (
    <main className="page-content">
      <section className="page-heading">
        <div>
          <p className="eyebrow">YOUR NEXT MOVIE NIGHT</p>
          <h1>Find your next favorite.</h1>
          <p className="page-description">
            Browse the collection and save the movies you want to watch.
          </p>
        </div>
        <label className="search-field">
          <span className="visually-hidden">Search movies</span>
          <span aria-hidden="true" className="search-icon">⌕</span>
          <input
            type="search"
            placeholder="Search by title, year, or genre"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </label>
      </section>

      <section aria-label="Movie collection">
        <div className="section-heading">
          <h2>Movie collection</h2>
          <span className="result-count">
            {matchingMovies.length} {matchingMovies.length === 1 ? "movie" : "movies"}
          </span>
        </div>
        {matchingMovies.length > 0 ? (
          <div className="movie-grid">
            {matchingMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={favoriteMovieIds.includes(movie.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <p className="empty-state">
            No movies match “{searchQuery}”. Try another title or genre.
          </p>
        )}
      </section>
    </main>
  );
}

export default Home;
