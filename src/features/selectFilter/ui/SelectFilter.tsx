import { ChangeEvent } from 'react';

import { MovieType } from 'entities/movie/model/types';
import { useMoviesActions } from 'entities/movie/lib';
import { Select } from 'shared/ui';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';

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
