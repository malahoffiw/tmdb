import { useEffect } from 'react';

import { fetchExactPerson } from 'entities/person/api';

export const Home = () => {
  useEffect(() => {
    fetchExactPerson(287).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="mt-16 px-6 text-neutral-900 dark:text-neutral-100">
      <h1 className="text-pink-900 dark:text-pink-100">Home</h1>
    </div>
  );
};
