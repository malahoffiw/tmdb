import { AppThunk } from 'app/store';
import { MovieShort } from '../types';

export const toggleMovieFavorite = (movie: MovieShort): AppThunk => {
  return async (dispatch) => {
    dispatch({ type: 'TOGGLE_MOVIE_FAVORITE', payload: movie.id });

    const prevFavorite = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');
    const isFavorite = !!prevFavorite.find((item: MovieShort) => item.id === movie.id);
    const nextFavorite = isFavorite
      ? prevFavorite.filter((item: MovieShort) => item.id !== movie.id)
      : [
          {
            id: movie.id,
            title: movie.title,
            posterPath: movie.posterPath,
          },
          ...prevFavorite,
        ];

    localStorage.setItem('favoriteMovies', JSON.stringify(nextFavorite));
  };
};
