import { ChangeEvent } from 'react';

import { MovieType } from 'entities/movie/model/types';
import { useActions } from 'entities/movie/lib';
import { Select } from 'shared/ui';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';

const options = [
  { value: 'popular', label: 'Popular' },
  { value: 'top_rated', label: 'Top Rated' },
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'now_playing', label: 'Latest' },
];

export const SelectFilter = () => {
  const { movieType } = useAppSelector((state) => state.movies);
  const { setMovieType } = useActions();

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setMovieType(event.target.value as MovieType);
  };

  return <Select options={options} value={movieType} onChange={handleSelectChange} />;
};
