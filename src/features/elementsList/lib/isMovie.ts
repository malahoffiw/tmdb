import { MovieShort } from 'entities/movie';
import { PersonShort } from 'entities/person';

export const isMovie = (object: MovieShort | PersonShort): object is MovieShort => {
  return 'posterPath' in object;
};
