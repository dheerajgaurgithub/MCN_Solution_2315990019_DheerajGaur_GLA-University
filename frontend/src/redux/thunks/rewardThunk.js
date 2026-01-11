// src/redux/thunks/rewardThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/reward.api';

export const fetchRewardsThunk = createAsyncThunk(
  'reward/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getAll(); // placeholder API call
      // example response: { rewards: [...], wallet: 120 }
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
