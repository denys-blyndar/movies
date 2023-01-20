import axios from 'axios';
import history from '../../history';
import toast from 'react-hot-toast';

import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_ERROR,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_ERROR,
} from './types';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getMovies = () => async (dispatch) => {
  try {
    const response = await axios.get('/movies');

    dispatch({ type: GET_MOVIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_MOVIES_ERROR, payload: error });
  }
};

export const addMovie = (data) => async (dispatch) => {
  try {
    const response = await axios.post('/add-movie', data);

    dispatch({ type: ADD_MOVIE_SUCCESS, payload: response.data });
    history.push('/');
    toast.success('Successfully added!');
  } catch (error) {
    dispatch({ type: ADD_MOVIE_ERROR, payload: error });
    toast.error('Error occurred while adding!');
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/movies/${id}`);

    dispatch({ type: DELETE_MOVIE_SUCCESS, payload: response.data });
    toast.success('Successfully removed!');
  } catch (error) {
    dispatch({ type: DELETE_MOVIE_ERROR, payload: error });
    toast.error('Error occurred while removing!');
  }
};
