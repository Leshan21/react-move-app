import MoveCard from "../components/MoveCard";
import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/api"; // Import API functions
import "../css/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]); // State to hold the list of movies
  const [error, setError] = useState(null); // State to hold any error message
  const [loading, setLoading] = useState(false); // State to indicate loading status

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    alert(searchQuery); // Display the search query in an alert
    setSearchQuery(""); // Clear the input field after search
  };

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
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <div className="movies-grid">
        {movies.map((movie) => (
          <MoveCard movie={movie} key={movie.id} />
        ))}
        {/*  Render MoveCard for each movie */}
      </div>
    </div>
  );
};

export default Home;
