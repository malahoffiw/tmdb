import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import { Favorites, Layout, Movies, People, Home, ErrorBoundary, ExactMovie, ExactPerson } from 'pages';
import { ThemeProvider } from 'features';

export const App = () => {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="movies/:id" element={<ExactMovie />} />
              <Route path="people" element={<People />} />
              <Route path="people/:id" element={<ExactPerson />} />
              <Route path="favorite" element={<Favorites />} />
            </Route>
          </Routes>
        </Provider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};
