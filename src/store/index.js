import { configureStore } from '@reduxjs/toolkit';

import { moviesReducer, selectMovies, selectDeletedMovieId, changeSearchValue } from './slices/movies-slice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export { store, selectMovies, selectDeletedMovieId, changeSearchValue };

export * from './thunks/get-movies';
export * from './thunks/add-movie';
export * from './thunks/edit-movie';
export * from './thunks/delete-movie';
