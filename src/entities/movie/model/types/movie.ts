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
  recommendedMovies: MovieShort[];
  cast: CastPerson[];
  reviews: Review[];
}

export type MovieShort = Pick<Movie, 'id' | 'title' | 'posterPath' | 'favorite'>;

interface Review {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

interface Genre {
  id: number;
  name: string;
}

interface CastPerson {
  id: number;
  name: string;
  imagePath: string;
}
