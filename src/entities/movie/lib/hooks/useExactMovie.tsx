import { useEffect, useState } from 'react';

import { Movie, MovieShort } from '../../model';
import { fetchExactMovie } from '../../api';
import { useAppSelector, useAppDispatch } from 'shared/lib';

export const useExactMovie = (id: number) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.movies);
  const currentMovie = movies.find((item: MovieShort) => item.id === id);

  useEffect(() => {
    if (movie && currentMovie && currentMovie.favorite !== movie.favorite) {
      setMovie({
        ...movie,
        favorite: currentMovie.favorite,
      });
    }
  }, [currentMovie, currentMovie?.favorite, movie]);

  useEffect(() => {
    setIsLoading(true);

    const favorite: MovieShort[] = JSON.parse(localStorage.getItem('favoriteMovies') || '[]').map(
      (item: Omit<MovieShort, 'favorite'>) => ({
        ...item,
        favorite: true,
      })
    );
    fetchExactMovie(id)
      .then((res) => {
        setMovie({
          favorite: !!favorite.find((item: MovieShort) => item.id === res.id),
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
          recommendedMovies:
            res.recommended !== undefined
              ? res.recommended.map((movie: { id: number; title: string; poster_path: string }) => ({
                  id: movie.id,
                  title: movie.title,
                  posterPath: movie.poster_path,
                }))
              : [],
          cast:
            res.credits !== undefined
              ? res.credits.cast.map((person: { id: number; name: string; profile_path: string }) => ({
                  id: person.id,
                  name: person.name,
                  imagePath: person.profile_path,
                }))
              : [],
          reviews:
            res.reviews !== undefined
              ? res.reviews.map((review: { id: number; author: string; content: string; created_at: string }) => ({
                  id: review.id,
                  author: review.author,
                  content: review.content,
                  createdAt: review.created_at,
                }))
              : [],
        });

        if (!movies.find((item: MovieShort) => item.id === res.id)) {
          dispatch({
            type: 'GET_MOVIES_SUCCESS',
            payload: favorite.find((item: MovieShort) => item.id === res.id)
              ? favorite
              : [
                  ...favorite,
                  {
                    id: res.id,
                    title: res.title,
                    posterPath: res.poster_path,
                    favorite: false,
                  },
                ],
          });
        }

        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof Error) {
          console.warn(error);
          setIsLoading(false);
          setError(error.message);
        } else {
          console.warn('Something went wrong at "GET_EXACT_MOVIE" action');
          setIsLoading(false);
          setError('Something went wrong at "GET_EXACT_MOVIE" action');
        }
      });
  }, [id]);

  return { movie, isLoading, error };
};
