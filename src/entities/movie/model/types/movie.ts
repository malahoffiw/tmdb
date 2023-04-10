export interface Movie {
  id: number;
  imdbId: string;
  favorite: boolean;
  title: string;
  originalTitle: string;
  posterPath: string;
  description: string;
  tagline: string;
  voteAverage: number;
  voteCount: number;
  releaseDate: string;
  runtime: number;
  genres: Genre[];
  similarMovies: MovieShort[];
  cast: CastPerson[];
}

interface CastPerson {
  id: number;
  name: string;
  imagePath: string;
}

export type MovieShort = Pick<Movie, 'id' | 'title' | 'posterPath' | 'favorite'>;

export interface Genre {
  id: number;
  name: string;
}
