// src/redux/slices/challengeSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchChallengesThunk } from '../thunks/challengeThunk';

const initialState = {
  challenges: [],
  loading: false,
  error: null,
};

const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChallengesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChallengesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.challenges = action.payload;
      })
      .addCase(fetchChallengesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load challenges';
      });
  },
});

export default challengeSlice.reducer;
