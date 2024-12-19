import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const addMovie = createAsyncThunk('movie/add', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post('/add-movie', data);
    if (response.data) {
      toast.success('Successfully added!');
    }
    return response.data;
  } catch (error) {
    console.error('Error occurred:', error);
    if (error.request) {
      return rejectWithValue(toast.error('Error occurred while adding!'));
    }
  }
});
