import { fetchApi } from 'shared/api';
import { MovieType } from '../model';

const fetchMoviesTopRated = async (page: number) => {
  const response = await fetchApi(`/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
  return response.json();
};

const fetchMoviesLatest = async (page: number) => {
  const response = await fetchApi(`/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
  return response.json();
};

const fetchMoviesPopular = async (page: number) => {
  const response = await fetchApi(`/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
  return response.json();
};

const fetchMoviesUpcoming = async (page: number) => {
  const response = await fetchApi(`/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
  return response.json();
};

const fetchMoviesByType = async (page: number, type: MovieType) => {
  switch (type) {
    case 'top_rated':
      return await fetchMoviesTopRated(page);
    case 'now_playing':
      return await fetchMoviesLatest(page);
    case 'popular':
      return await fetchMoviesPopular(page);
    case 'upcoming':
      return await fetchMoviesUpcoming(page);
    default:
      return [];
  }
};

export { fetchMoviesByType };
