function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <article className="movie-card">
      <div className="movie-poster-wrap">
        <img className="movie-poster" src={movie.poster} alt={`${movie.title} placeholder poster`} />
        <button
          className={`favorite-button${isFavorite ? " is-favorite" : ""}`}
          type="button"
          aria-label={`${isFavorite ? "Remove" : "Add"} ${movie.title} ${isFavorite ? "from" : "to"} favorites`}
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(movie.id)}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
      <div className="movie-details">
        <div className="movie-title-row">
          <h3>{movie.title}</h3>
          <span className="movie-year">{movie.year}</span>
        </div>
        <p className="movie-genre">{movie.genre}</p>
        <p className="movie-description">{movie.description}</p>
      </div>
    </article>
  );
}

export default MovieCard;
