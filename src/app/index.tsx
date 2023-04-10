import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import { Favorite, Layout, Movies, People, Home, ErrorBoundary, Fallback } from 'pages';
import { ThemeProvider } from 'features/toggleTheme';
import { ExactMovie } from '../pages/Movies/[id]/page';
import { ExactPerson } from '../pages/People/[id]/page';

export const App = () => {
  return (
    <ThemeProvider>
      <ErrorBoundary fallback={<Fallback />}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="movies/:id" element={<ExactMovie />} />
              <Route path="people" element={<People />} />
              <Route path="people/:id" element={<ExactPerson />} />
              <Route path="favorite" element={<Favorite />} />
            </Route>
          </Routes>
        </Provider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};
