import { useEffect, useState } from 'react';

import { fetchExactMovie } from 'entities/movie/api';
import { IMAGE_URL } from 'shared/api';
import { ListCard } from 'shared/ui';

export const Home = () => {
  const [movie, setMovie] = useState({ title: '', poster_path: '' });

  useEffect(() => {
    fetchExactMovie(600).then((data) => {
      setMovie(data);
    });
  }, []);

  return (
    <div className="mt-16 px-6 text-neutral-900 dark:text-neutral-100">
      <h1 className="text-pink-900 dark:text-pink-100">Home</h1>
      <ListCard title={movie.title} imageSrc={`${IMAGE_URL}${movie.poster_path}`} />
    </div>
  );
};
