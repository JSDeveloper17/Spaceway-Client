
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For redirects on auth errors


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  timeout: 10000, // 10s timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Add JWT token to headers if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Retrieve stored JWT
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach to every request
    }
    console.log('Request:', config.method?.toUpperCase(), config.url); // Dev logging
    return config;
  },
  (error) => {
    console.error('Request Error:', error); // Log failures
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle success/errors globally
api.interceptors.response.use(
  (response) => {
    console.log('Response:', response.status, response.config.url); // Dev logging
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized: Clear token and redirect to login
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user'); // Clear user data too
      window.location.href = '/login'; // Hard redirect for auth pages
    }
    // User-friendly error: Extract message from backend
    const message = error.response?.data?.message || 'An error occurred. Please try again.';
    console.error('API Error:', message);
    // TODO: Use toast notification library (e.g., react-hot-toast) to show alerts
    alert(message); // Temporary; replace with UI toast
    return Promise.reject(error);
  }
);

export default api;

