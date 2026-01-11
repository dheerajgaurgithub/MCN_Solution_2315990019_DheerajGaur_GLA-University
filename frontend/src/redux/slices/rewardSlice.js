// src/redux/slices/rewardSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchRewardsThunk } from '../thunks/rewardThunk';

const initialState = {
  rewards: [],
  wallet: 0,
  loading: false,
  error: null,
};

const rewardSlice = createSlice({
  name: 'reward',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRewardsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRewardsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.rewards = action.payload.rewards;
        state.wallet = action.payload.wallet;
      })
      .addCase(fetchRewardsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load rewards';
      });
  },
});

export default rewardSlice.reducer;
