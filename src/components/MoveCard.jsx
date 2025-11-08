const MoveCard = ({ movie }) => {
  const handleClick = () => {
    console.log("Favorite button clicked!");
  };

  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} /> // Movie Poster
            <div className="movie-overlay">
            <button className="favorite-btn" onClick={handleClick}>
            Click
            </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
  );
};

export default MoveCard;
