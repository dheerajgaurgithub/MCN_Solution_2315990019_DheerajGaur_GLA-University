// src/hooks/useStreak.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStreaksThunk } from '../redux/thunks/streakThunk';

export default function useStreak() {
  const dispatch = useDispatch();
  const streakState = useSelector(state => state.streak);
  const [streakMultiplier, setStreakMultiplier] = useState(1);

  useEffect(() => {
    // Fetch streak data on mount
    dispatch(fetchStreaksThunk());
  }, []);

  useEffect(() => {
    // Calculate multiplier based on current streak count
    if (streakState.currentStreak >= 7) setStreakMultiplier(2);
    else if (streakState.currentStreak >= 3) setStreakMultiplier(1.5);
    else setStreakMultiplier(1);
  }, [streakState.currentStreak]);

  return {
    streaks: streakState.streaks,
    currentStreak: streakState.currentStreak,
    streakMultiplier
  };
}
