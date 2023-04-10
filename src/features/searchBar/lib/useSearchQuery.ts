import { ChangeEvent, useState } from 'react';

import { useDebounce } from 'shared/lib';

export const useSearchQuery = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return {
    query,
    debouncedQuery,
    handleSearch,
  };
};
