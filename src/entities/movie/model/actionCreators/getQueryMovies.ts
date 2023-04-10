import { AppThunk } from 'app/store';
import { fetchQueryMovies } from '../../api';
import { MovieShort } from '../types';

export const getQueryMovies = (query: string): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'GET_QUERY_MOVIES' });

      const favorite: MovieShort[] = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');

      const response = await fetchQueryMovies(query);
      const movies = response.results.map((movie: { id: number; title: string; poster_path: string }) => {
        return {
          id: movie.id,
          title: movie.title,
          posterPath: movie.poster_path,
          favorite: !!favorite.find((item: MovieShort) => item.id === movie.id),
        };
      });

      dispatch({ type: 'GET_QUERY_MOVIES_SUCCESS', payload: movies });
    } catch (error) {
      if (error instanceof Error) {
        console.warn(error.message);
        dispatch({ type: 'GET_QUERY_MOVIES_ERROR', payload: error.message });
      } else {
        console.warn('Something went wrong at "GET_QUERY_MOVIES" action');
        dispatch({ type: 'GET_QUERY_MOVIES_ERROR', payload: 'Something went wrong at "GET_QUERY_MOVIES" action' });
      }
    }
  };
};
