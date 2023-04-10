import { AppThunk } from 'app/store';
import { fetchMoviesByType } from '../../api';
import { MovieType } from '../types';

export const getMovies = (page: number, type: MovieType): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'GET_MOVIES' });

      const response = await fetchMoviesByType(page, type);
      const movies = response.results.map((movie: any) => {
        return {
          id: movie.id,
          title: movie.title,
          posterPath: movie.poster_path,
        };
      });

      dispatch({ type: 'GET_MOVIES_TOTAL_PAGES', payload: response.total_pages > 500 ? 500 : response.total_pages });
      dispatch({ type: 'GET_MOVIES_SUCCESS', payload: movies });
    } catch (error) {
      if (error instanceof Error) {
        console.warn(error.message);
        dispatch({ type: 'GET_MOVIES_ERROR', payload: error.message });
      } else {
        console.warn('Something went wrong at "GET_MOVIES" action');
        dispatch({ type: 'GET_MOVIES_ERROR', payload: 'Something went wrong at "GET_MOVIES" action' });
      }
    }
  };
};
