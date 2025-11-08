import React from "react";
import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MoveCard from "../components/MoveCard";

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h3>Your favorites</h3>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MoveCard movie={movie} key={movie.id} />
          ))}
          {/*  Render MoveCard for each movie */}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No favorites movies yet</h2>
    </div>
  );
};

export default Favorites;
