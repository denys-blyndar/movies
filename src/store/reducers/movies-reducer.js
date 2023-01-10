import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_ERROR,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_ERROR,
  IMPORT_MOVIES_SUCCESS,
  IMPORT_MOVIES_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  movies: [],
  error: null,
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_MOVIES_SUCCESS:
    return {
      ...state,
      movies: action.payload,
    };
  case GET_MOVIES_ERROR:
    return {
      error: action.payload,
    };
  case ADD_MOVIE_SUCCESS:
    return {
      ...state,
      movies: [...state.movies, action.payload],
    };
  case ADD_MOVIE_ERROR:
    return {
      error: action.payload,
    };
  case DELETE_MOVIE_SUCCESS:
    return {
      ...state,
      movies: state.movies.filter(({ _id }) => _id !== action.payload.id),
    };
  case DELETE_MOVIE_ERROR:
    return {
      error: action.payload,
    };
  case IMPORT_MOVIES_SUCCESS:
    return {
      ...state,
      movies: [...action.payload],
    };
  case IMPORT_MOVIES_ERROR:
    return {
      error: action.payload,
    };
  default:
    return state;
  }
};

export default moviesReducer;
