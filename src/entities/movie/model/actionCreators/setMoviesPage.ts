import { MoviesAction } from '../types';

export const setMoviesPage = (page: number): MoviesAction => ({
  type: 'SET_MOVIES_PAGE',
  payload: page,
});
