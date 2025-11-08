import "../css/MovieCard.css";

const MoveCard = ({ movie }) => {
  const handleClick = () => {
    console.log("Favorite button clicked!");
  };

  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />   {/*Movie Post*/}
            <div className="movie-overlay">
            <button className="favorite-btn" onClick={handleClick}>
            Click
            </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
  );
};

export default MoveCard;
