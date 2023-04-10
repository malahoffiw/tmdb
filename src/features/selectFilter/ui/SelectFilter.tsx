import { ChangeEvent } from 'react';

import { MovieType, useMoviesActions } from 'entities/movie';
import { useAppSelector } from 'shared/lib';
import { Select } from 'shared/ui';

const options = [
  { value: 'top_rated', label: 'Top Rated' },
  { value: 'popular', label: 'Popular' },
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'now_playing', label: 'Latest' },
];

export const SelectFilter = () => {
  const { movieType } = useAppSelector((state) => state.movies);
  const { setMovieType } = useMoviesActions();

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setMovieType(event.target.value as MovieType);
  };

  return <Select options={options} value={movieType} onChange={handleSelectChange} />;
};
