import MoveCard from "../components/MoveCard";
import { useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Inception", release_date: "2015" },
    { id: 2, title: "Interstellar", release_date: "2014" },
    { id: 3, title: "The Dark Knight", release_date: "2008" },
    { id: 4, title: "Tenet", release_date: "2020" },
  ];

  const handleSearch = () => {console.log("Searching for:", searchQuery)};
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MoveCard movie={movie} key={movie.id} />
        ))}{" "}
        {/*  Render MoveCard for each movie */}
      </div>
    </div>
  );
};

export default Home;
