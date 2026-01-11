// src/redux/thunks/challengeThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/challenge.api';

export const fetchChallengesThunk = createAsyncThunk(
  'challenge/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getAll(); // placeholder API call
      return data; // should return array of challenges
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
