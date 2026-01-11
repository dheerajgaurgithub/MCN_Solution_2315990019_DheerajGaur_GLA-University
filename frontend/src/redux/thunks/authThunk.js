// src/redux/thunks/authThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/auth.api';

// credentials: { email, password } OR token
export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.login(credentials); // placeholder API call
      // Response example: { user: {...}, token: "jwt-token" }
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
