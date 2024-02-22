import axios from 'axios';

const apiKey = '06cd4e5db5fa2aa62612c293f9a129c7';
const apiUrl = 'https://api.themoviedb.org/3/discover/movie';

const fetchMovies = async (): Promise<any> => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        api_key: apiKey,

      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};


export { fetchMovies };
