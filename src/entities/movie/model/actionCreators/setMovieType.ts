import { MoviesAction, MovieType } from '../types';

export const setMovieType = (type: MovieType): MoviesAction => ({
  type: 'SET_MOVIE_TYPE',
  payload: type,
});
