

const BASE_URL = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_MOVIE_API_KEY; // Accessing the API key from environment variables. we can not use doten v in vite also
// we want to use VITE_ start the naming the variables
export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${apiKey}`);
    const data = await response.json();
    console.log(import.meta.env.VITE_MOVIE_API_KEY);

    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
        query
      )}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};
