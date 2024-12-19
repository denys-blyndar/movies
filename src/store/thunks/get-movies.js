import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getMovies = createAsyncThunk('movies/get', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/movies');
    await pause(1000);
    return response.data;
  } catch (error) {
    console.error('Error occurred:', error);
    if (error.request) {
      return rejectWithValue('Unexpected Error Occured');
    }
  }
});

const pause = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};
