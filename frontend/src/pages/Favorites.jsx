import MovieCard from "../components/MovieCard";

function Favorites({ movies, favoriteMovieIds, onToggleFavorite }) {
  const favoriteMovies = movies.filter((movie) => favoriteMovieIds.includes(movie.id));

  return (
    <main className="page-content">
      <section className="page-heading">
        <div>
          <p className="eyebrow">YOUR PERSONAL COLLECTION</p>
          <h1>Favorite movies</h1>
          <p className="page-description">
            All the movies you have saved, together in one place.
          </p>
        </div>
      </section>

      {favoriteMovies.length > 0 ? (
        <div className="movie-grid">
          {favoriteMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="empty-state-icon" aria-hidden="true">♡</p>
          <h2>No favorites yet</h2>
          <p>Save a movie from the home page and it will show up here.</p>
          <a className="text-link" href="/">Explore movies</a>
        </div>
      )}
    </main>
  );
}

export default Favorites;
