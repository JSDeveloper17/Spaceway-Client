

// React Context for global auth state management.
// ---------------------------------------------------------
// Why: Centralizes login/register/logout logic; provides user data, token, and loading states to components.
// Usage: Wrap <App> with <AuthProvider>; use useAuth() hook in components.
// Integrates with api.js: Uses axios for requests, stores JWT/user in localStorage for persistence.
// Protected Routes: Export isAuthenticated() for route guards.
// Logout: Clears storage, calls backend invalidate if needed.
// Scalability: Easy to add refresh tokens, role-based access later.

import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api'; // Axios instance
import { useNavigate } from 'react-router-dom'; // For redirects

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Current user data (from JWT decode or backend)
  const [token, setToken] = useState(localStorage.getItem('token')); // Persist token
  const [loading, setLoading] = useState(true); // Initial load state
  const navigate = useNavigate();

  // Effect: Check for existing token on mount, validate with backend
  useEffect(() => {
    const initAuth = async () => {
      if (token) {
        try {
          // Validate token by fetching user profile
          const response = await api.get('/auth/me'); // Assumes backend /auth/me endpoint
          setUser(response.data.user); // Set user from response
        } catch (err) {
          // Invalid token: Clear and reset
          logout();
        }
      }
      setLoading(false);
    };

    initAuth();
  }, [token]);

  // Login Function: Calls backend, stores token/user, redirects
  const login = async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials); // Use axios instance
      const { token: newToken, user: userData } = response.data;

      localStorage.setItem('token', newToken);
      localStorage.setItem('user', JSON.stringify(userData)); // Optional: Store user JSON

      setToken(newToken);
      setUser(userData);

      navigate('/dashboard'); 
      return { success: true };
    } catch (err) {
      return {
        success: false,
        error: err.response?.data?.message || 'Login failed',
      };
    }
  };

  
  const register = async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      const { token: newToken, user: registeredUser } = response.data;

      localStorage.setItem('token', newToken);
      localStorage.setItem('user', JSON.stringify(registeredUser));

      setToken(newToken);
      setUser(registeredUser);

      navigate('/dashboard');
      return { success: true };
    } catch (err) {
      return {
        success: false,
        error: err.response?.data?.message || 'Registration failed',
      };
    }
  };

  // Logout Function: Clear state/storage, redirect to login
  const logout = () => {
    // TODO: Call backend /auth/logout to invalidate session (if using refresh tokens)
    // await api.post('/auth/logout');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    navigate('/login');
  };

  // isAuthenticated Helper: For route protection
  const isAuthenticated = () => !!token && !!user;

  // Context Value: Expose to consumers
  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook: For easy access in components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
