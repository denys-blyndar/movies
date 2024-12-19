import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const deleteMovie = createAsyncThunk('movie/delete', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`/movies/${id}`);
    if (response.data) {
      toast.success('Successfully removed!');
    }
    return id;
  } catch (error) {
    console.error('Error occurred:', error);
    if (error.request) {
      return rejectWithValue(toast.error('Error occurred while removing!'));
    }
  }
});
