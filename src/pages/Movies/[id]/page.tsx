import { Link, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import { useExactMovie, useMoviesActions } from 'entities/movie';
import { IMAGE_URL } from 'shared/api';
import { List, ExactPage, ErrorPage, LoadingPage } from 'shared/ui';

dayjs.extend(advancedFormat);

export const ExactMovie = () => {
  const { id } = useParams();
  if (!id) throw new Error('Movie not found');

  const { movie, isLoading, error } = useExactMovie(+id);
  const { toggleMovieFavorite } = useMoviesActions();
  const handleStarClick = () => {
    if (!movie) {
      return;
    }
    toggleMovieFavorite(movie);
  };

  if (error) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!movie) throw new Error('Movie not found');
  const releaseDate = movie.releaseDate.length > 0 ? dayjs(movie.releaseDate).format('MMMM Do, YYYY') : '';

  return (
    <ExactPage.Container>
      <ExactPage.SectionScrolling>
        <ExactPage.Heading title={movie.title} sub={releaseDate}>
          <ExactPage.IMDBLink id={movie.imdbId} />
        </ExactPage.Heading>
        <ExactPage.Callout>
          {movie.tagline.length > 0 && (
            <ExactPage.Label text="Tagline">
              <p className="italic">"{movie.tagline}"</p>
            </ExactPage.Label>
          )}
          {movie.description.length > 0 && (
            <ExactPage.Label text="Synopsis">
              <p>{movie.description}</p>
            </ExactPage.Label>
          )}
          {movie.genres.length > 0 && <ExactPage.Genres genres={movie.genres} />}
        </ExactPage.Callout>
        {movie.cast.length > 0 && (
          <>
            <ExactPage.Paragraph>Starring</ExactPage.Paragraph>
            <List.Horizontal>
              {movie.cast.map((person) => (
                <Link to={`/people/${person.id}`} key={person.id}>
                  <List.Card title={person.name} imageSrc={person.imagePath ? `${IMAGE_URL}${person.imagePath}` : ''} />
                </Link>
              ))}
            </List.Horizontal>
          </>
        )}
        {movie.reviews.length > 0 && (
          <>
            <ExactPage.Paragraph>Reviews</ExactPage.Paragraph>
            <ExactPage.Reviews reviews={movie.reviews} />
          </>
        )}
        {movie.recommendedMovies.length > 0 && (
          <>
            <ExactPage.Paragraph>Recommended movies</ExactPage.Paragraph>
            <List.Horizontal>
              {movie.recommendedMovies.map((movie) => (
                <Link to={`/movies/${movie.id}`} key={movie.id}>
                  <List.Card title={movie.title} imageSrc={movie.posterPath ? `${IMAGE_URL}${movie.posterPath}` : ''} />
                </Link>
              ))}
            </List.Horizontal>
          </>
        )}
      </ExactPage.SectionScrolling>
      <ExactPage.SectionSticky imageSrc={movie.posterPath} imageAlt={movie.title}>
        <ExactPage.MovieFooter
          rating={movie.voteAverage.toFixed(1)}
          isFavorite={movie.favorite}
          toggleFavorite={handleStarClick}
        />
      </ExactPage.SectionSticky>
    </ExactPage.Container>
  );
};
