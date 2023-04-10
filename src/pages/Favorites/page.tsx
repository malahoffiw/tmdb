import { MouseEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { MovieShort } from 'entities/movie';
import { IMAGE_URL } from 'shared/api';
import { Favorite, Heading, Container, EmptyPage, LoadingPage } from 'shared/ui';

export const Favorites = () => {
  const [movies, setMovies] = useState<MovieShort[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('favoriteMovies') || '[]').map(
      (item: Omit<MovieShort, 'favorite'>) => ({
        ...item,
        favorite: true,
      })
    );
    setIsLoading(false);
    setMovies(favorite);
  }, []);

  const handleStarClick = (id: number) => (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id
          ? {
              ...movie,
              favorite: !movie.favorite,
            }
          : movie
      )
    );

    const favorites = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');
    if (favorites.find((item: MovieShort) => item.id === id)) {
      localStorage.setItem('favoriteMovies', JSON.stringify(favorites.filter((item: MovieShort) => item.id !== id)));
    } else {
      localStorage.setItem('favoriteMovies', JSON.stringify([movies.find((item) => item.id === id), ...favorites]));
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (movies.length === 0) {
    return <EmptyPage title="Favorites" />;
  }

  return (
    <Container.Auto>
      <Heading>Favorites</Heading>
      <Favorite.List>
        {movies.map((movie: MovieShort) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <Favorite.Card
              title={movie.title}
              imageSrc={movie.posterPath ? `${IMAGE_URL}${movie.posterPath}` : ''}
              isFavorite={movie.favorite}
              onClick={handleStarClick(movie.id)}
            />
          </Link>
        ))}
      </Favorite.List>
    </Container.Auto>
  );
};
