import dotenv from 'dotenv';
dotenv.config();

BASE_URL = 'https://api.themoviedb.org/3';

export const getPopulerMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${process.env.MOVE_API_KEY}&language=en-US&page=1`); // Fetch popular movies
    const data = await response.json(); // Parse the JSON response 
    return data.results; // Return the array of popular movies
}


export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${process.env.MOVE_API_KEY}&query=${encodeURIComponent(query)}`) // Fetch search results
  const data = await response.json(); // Parse the JSON response
  return data.results; // Return the array of search results
}