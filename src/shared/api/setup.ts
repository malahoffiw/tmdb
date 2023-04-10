const fetchAbsolute = (fetch: typeof window.fetch, baseUrl: string) => (url: string) => fetch(baseUrl + url);

export const API_URL = 'https://api.themoviedb.org';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchApi = fetchAbsolute(window.fetch, API_URL);
