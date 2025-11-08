

const BASE_URL = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.MOVIE_API_KEY; // Accessing the API key from environment variables. we can not use doten v in vite

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=520bb8edc1fc60fd5992e6c44846b1ac`);
    const data = await response.json();
    console.log(data);
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
