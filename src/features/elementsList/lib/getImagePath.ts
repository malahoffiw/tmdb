import { isMovie } from './isMovie';
import { MovieShort } from 'entities/movie';
import { PersonShort } from 'entities/person';
import { IMAGE_URL } from 'shared/api';

export const getImagePath = (item: MovieShort | PersonShort) => {
  if (isMovie(item)) {
    return item.posterPath ? `${IMAGE_URL}${item.posterPath}` : '';
  }
  return item.imagePath ? `${IMAGE_URL}${item.imagePath}` : '';
};
