

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'; // React Icons for form fields and toggle
import Button from '../components/ui/Button.jsx';
import AppIcon from '../components/AppIcon.jsx'; // For fallback icons if needed
import { cn } from '../utils/cn.js';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext.jsx'; // Auth context integration

// Form validation schema using react-hook-form (client-side only)
// Why: Immediate feedback for UX; backend re-validates for security (e.g., hashing, uniqueness).
const loginSchema = {
  email: { 
    required: 'Email is required', 
    pattern: { 
      value: /^\S+@\S+$/i, 
      message: 'Invalid email format' 
    } 
  },
  password: { 
    required: 'Password is required', 
    minLength: { 
      value: 8, 
      message: 'Password must be at least 8 characters' 
    } 
  }
};

// CEO Testimonials/Benefits data - Tailored to Spaceway's e-commerce pricing automation
// Why: Builds trust with social proof; rotates dynamically for engagement.
const testimonials = [
  {
    quote: '"Spaceway transformed our pricing strategy—boosted profits by 40% in just one month!"',
    author: 'Rajesh Kumar, CEO of TechDistribute',
    role: 'E-commerce Seller'
  },
  {
    quote: 'Real-time competitor tracking saved us hours of manual work. Highly recommend for SMEs.',
    author: 'Priya Sharma, Founder of RetailHub',
    role: 'Product Manager'
  },
  {
    quote: 'Turnover analytics gave us the insights to scale from 100 to 10K SKUs seamlessly.',
    author: 'Amit Patel, Business Owner',
    role: 'SME Owner'
  }
];

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Use context for login functionality
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility for UX
  const [isLoading, setIsLoading] = useState(false); // Loading state to prevent double-submits

  // react-hook-form setup: Handles validation, submission, and form state
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: { email: '', password: '' } // Pre-fill empty for clean UX
  });

  // Handle form submission: Integrates with AuthContext for API call
  const onSubmit = async (data) => {
    setIsLoading(true);
    const result = await login(data); // Call context login (uses api.js under the hood)

    if (result && result.success) {
      reset(); // Clear form on success
      navigate('/dashboard'); // Redirect (already in context, but explicit for safety)
    } else {
      // Error handled globally in api.js interceptor, but log here if needed
      console.error('Login error:', result?.error || 'Unknown error');
    }
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-background text-foreground sm:px-6 lg:px-8">
      {/* Subtle background gradient for visual depth, using theme vars from index.css */}
      <div className="absolute inset-0 gradient-hero opacity-20" />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center min-h-[70vh]">
        {/* Left Column: Animated Testimonials/Benefits - Builds trust and engagement */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} // Framer Motion: Start off-screen left
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth easing
          className="space-y-8 text-center lg:w-1/2 lg:text-left"
        >
          {/* Header with animated fade-in-up from index.css */}
          <div className="animate-fade-in-up">
            <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              <span className="block text-primary">Welcome Back</span>
              <span className="block text-secondary">to Spaceway</span>
            </h1>
            <p className="max-w-md mx-auto text-lg leading-relaxed text-muted-foreground lg:mx-0">
              Join thousands of SMEs automating pricing and boosting profits. Secure, fast, and insightful.
            </p>
          </div>

          {/* Carousel-like testimonials: Simple array map with subtle float animation */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }} // Staggered animation
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }} // Stagger for visual flow
                className="p-6 glass-card rounded-xl shadow-professional-lg animate-float" // Glassmorphism + float from index.css
                whileHover={{ scale: 1.02 }} // Engagement: Hover scale
              >
                <p className="mb-4 italic font-medium text-foreground">"{testimonial.quote}"</p>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-full bg-primary/10 animate-pulse"> {/* Pulsing avatar for dynamism */}
                    <FaUser className="text-sm text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Login Form - Clean, focused, with validation feedback and icons */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} // Animate from right
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={cn(
            "lg:w-1/2 w-full max-w-md", // Responsive width: Full on mobile, half on desktop
            "space-y-6 animate-fade-in-up" // Fade-in from CSS
          )}
        >
          {/* Form Card with glassmorphism for modern look */}
          <div className="p-8 glass-card rounded-2xl shadow-professional-xl">
            <div className="flex flex-col items-center justify-center mb-8 space-y-3 text-center">
              {/* Animated lock icon for security theme */}
              <motion.div 
                initial={{ scale: 0.8, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
                // className="mx-auto mb-4"
                className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10"
              >
                <FaLock size={48} className="text-primary" />
              </motion.div>
              <h2 className="text-2xl font-bold text-foreground">Secure Login</h2>
              <p className="text-muted-foreground ">Enter your credentials to access your dashboard</p>
            </div>

            {/* Form: Uses react-hook-form for validation */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email Field with Icon */}
              <div className="relative">
                <FaUser className={cn(
                  "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-lg",
                  "pointer-events-none" // Prevent icon interaction
                )} />
                <input
                  id="email"
                  type="email"
                  {...register('email', loginSchema.email)} // Bind to form hook with validation
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300",
                    errors.email && "border-destructive focus:ring-destructive" // Error styling
                  )}
                  placeholder="Enter your email"
                  disabled={isLoading} // Disable during submit
                />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
              </div>

              {/* Password Field with Icon and Toggle */}
              <div className="relative">
                <FaLock className={cn(
                  "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-lg",
                  "pointer-events-none"
                )} />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'} // Toggle visibility
                  {...register('password', loginSchema.password)}
                  className={cn(
                    "w-full pl-10 pr-10 py-3 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300",
                    errors.password && "border-destructive focus:ring-destructive"
                  )}
                  placeholder="Enter your password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)} // Toggle handler
                  className="absolute transition-colors transform -translate-y-1/2 right-3 top-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
                {errors.password && <p className="mt-1 text-sm text-destructive">{errors.password.message}</p>}
              </div>

              {/* Forgot Password Link: For UX, leads to reset flow (TBD) */}
              <div className="text-right">
                <Link to="/forgot-password" className="text-sm transition-colors text-primary hover:text-primary/80">
                  Forgot your password?
                </Link>
              </div>

              {/* Submit Button: Full-width on mobile, loading state, hover effect */}
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full transition-transform duration-300 group hover:scale-105" // Engagement: Hover scale
                disabled={isLoading}
                iconName={isLoading ? "loading" : "logIn"} // Spinner or login icon
                iconPosition="left"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            {/* Register Link: Encourage new users */}
            <div className="pt-4 mt-6 text-center border-t border-border">
              <p className="text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium transition-colors text-primary hover:underline">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;