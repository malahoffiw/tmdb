import { useEffect, useState } from 'react';
import { Movie } from '../../model/types';
import { fetchExactMovie } from '../../api';

export const useExactMovie = (id: number) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    try {
      fetchExactMovie(id).then((res) => {
        setMovie({
          id: res.id,
          imdbId: res.imdb_id,
          title: res.title,
          originalTitle: res.original_title,
          posterPath: res.poster_path,
          description: res.overview,
          tagline: res.tagline,
          voteAverage: res.vote_average,
          voteCount: res.vote_count,
          releaseDate: res.release_date,
          runtime: res.runtime,
          genres: res.genres,
          similarMovies: res.similar.map((movie: { id: number; title: string; poster_path: string }) => ({
            id: movie.id,
            title: movie.title,
            posterPath: movie.poster_path,
          })),
          cast: res.credits.cast.map((person: { id: number; name: string; profile_path: string }) => ({
            id: person.id,
            name: person.name,
            imagePath: person.profile_path,
          })),
        });
        setIsLoading(false);
      });
    } catch (error) {
      if (error instanceof Error) {
        console.warn(error.message);
        setIsLoading(false);
        setError(error.message);
      } else {
        console.warn('Something went wrong at "GET_EXACT_MOVIE" action');
        setIsLoading(false);
        setError('Something went wrong at "GET_EXACT_MOVIE" action');
      }
    }
  }, [id]);

  return { movie, isLoading, error };
};
