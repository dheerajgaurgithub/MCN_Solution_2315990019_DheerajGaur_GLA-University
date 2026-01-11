// src/hooks/useAuth.js
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginThunk } from '../redux/thunks/authThunk';

export default function useAuth() {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);

  // Example: auto-login / fetch user
  useEffect(() => {
    if (!authState.user && authState.token) {
      // You can dispatch an API call to fetch user profile
      dispatch(loginThunk(authState.token));
    }
  }, [authState.token]);

  const login = (credentials) => {
    // Dispatch login thunk
    dispatch(loginThunk(credentials));
  };

  const logout = () => {
    // Clear Redux auth state
    // Implement clear token logic here
    console.log('Logout triggered');
  };

  return {
    ...authState,
    login,
    logout
  };
}
