

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/Navbar.jsx";

// Pages
import { Home } from "../pages/Home.jsx";
import Products from "../pages/products.jsx";
import Turnover from "../pages/Turnover.jsx";
import Support from "../pages/Support.jsx";
import About from "../pages/AboutUs.jsx";
import Demo from "../pages/Demo.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import Dashboard from "../pages/Dashboard.jsx";

import { useAuth } from "../contexts/AuthContext.jsx";

// ---------------------------------------------------------------------------
// ⭐ Scroll to Top on route change
// ---------------------------------------------------------------------------
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

// ---------------------------------------------------------------------------
// ⭐ ProtectedRoute Component (Fixed + Optimized)
// ---------------------------------------------------------------------------
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  // While checking token/user, show nothing (prevents flicker)
  if (loading) return null;

  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

// ---------------------------------------------------------------------------
// ⭐ Main Routes Wrapper
// ---------------------------------------------------------------------------
export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/turnover" element={<Turnover />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/demo" element={<Demo />} />

        {/* Auth Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback Route — 404 Handler */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </>
  );
};
