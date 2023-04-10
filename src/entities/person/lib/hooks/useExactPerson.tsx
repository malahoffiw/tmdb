import { useEffect, useState } from 'react';

import { fetchExactPerson } from '../../api';
import { Person } from '../../model';
import { MovieShort } from 'entities/movie';

export const useExactPerson = (id: number) => {
  const [person, setPerson] = useState<Person | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const favorite: MovieShort[] = JSON.parse(localStorage.getItem('favoriteMovies') || '[]').map(
      (item: Omit<MovieShort, 'favorite'>) => ({
        ...item,
        favorite: true,
      })
    );
    fetchExactPerson(id)
      .then((res) => {
        setPerson({
          id: res.id,
          name: res.name,
          imagePath: res.profile_path,
          bio: res.biography,
          placeOfBirth: res.place_of_birth,
          birthday: res.birthday ?? '',
          deathday: res.deathday ?? '',
          credits: res.credits.cast
            .filter((media: { media_type: 'movie' | 'tv' }) => media.media_type === 'movie')
            .map((movie: { id: number; title: string; poster_path: string }) => ({
              id: movie.id,
              title: movie.title,
              posterPath: movie.poster_path,
              favorite: !!favorite.find((item: MovieShort) => item.id === movie.id),
            })),
        });

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

  return { person, isLoading, error };
};
