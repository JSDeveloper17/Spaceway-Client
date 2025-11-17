

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaCheckSquare, FaRocket, FaChartLine, FaShieldAlt, FaEye, FaEyeSlash } from 'react-icons/fa'; // Added FaEye/FaEyeSlash for password toggle
import Button from '../components/ui/Button.jsx';
import { cn } from '../utils/cn.js';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext.jsx';

// Services multi-select options - Aligned with Spaceway's core features
const servicesOptions = [
  { id: 'product-listing', label: 'Product Listing Management', description: 'Centralize SKU listings across platforms' },
  { id: 'pricing-automation', label: 'Pricing Automation', description: 'MRP-based repricing rules' },
  { id: 'competitor-tracking', label: 'Competitor Tracking', description: 'Real-time price monitoring on Amazon/Flipkart' },
  { id: 'turnover-analytics', label: 'Turnover Analytics', description: 'Profitability forecasting and reports' },
  { id: 'inventory-sync', label: 'Inventory Management', description: 'Stock tracking and alerts' },
  { id: 'offer-calculator', label: 'Offer Calculator', description: 'Dynamic discount simulations' },
  {
    id: 'latching',
    label: 'Latching',
    description: 'Seamless catalog latching and listing approvals'
  },
  {
    id: 'gst-services',
    label: 'GST Services',
    description: 'GST filing assistance and compliance support'
  }
];

// Form validation schema - Client-side rules for react-hook-form
// Provides immediate feedback (e.g., required fields, patterns) before backend submission.
// Backend will re-validate for security.
const registerSchema = {
  firstName: { required: 'First name is required' },
  lastName: { required: 'Last name is required' },
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
  },
  contact: { 
    required: 'Contact number is required', 
    pattern: { 
      value: /^[0-9]{10}$/, 
      message: 'Enter a valid 10-digit phone number' 
    } 
  },
  terms: { required: 'You must accept the terms and conditions' }
  // Note: Services validation is custom via state (selectedServices.length > 0)
};

const Register = () => {
  const navigate = useNavigate();
  const { register: authRegister } = useAuth(); // Use context register
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
    defaultValues: { firstName: '', lastName: '', email: '', password: '', contact: '', terms: false }
  });

  // Watch terms for custom validation if needed
  const terms = watch('terms');

  // Handle multi-select change - Updates selectedServices array
  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) ? prev.filter(id => id !== serviceId) : [...prev, serviceId]
    );
  };

  // Form submission handler - Integrates with AuthContext
  const onSubmit = async (data) => {
    setIsLoading(true);
    const submitData = { ...data, services: selectedServices }; // Combine with services state

    const result = await authRegister(submitData); // Call context register function
    if (result.success) {
      reset(); // Clear form fields
      setSelectedServices([]); // Reset multi-select
    } else {
      console.error(result.error); // Log error (handled in context/interceptor)
    }
    setIsLoading(false);
  };

  // Product Highlights for Left Section - Visual cards for engagement
  const products = [
    { icon: FaRocket, name: 'Pricing Automation', desc: 'Auto-adjust prices based on competitors' },
    { icon: FaChartLine, name: 'Turnover Analytics', desc: 'Track profits with real-time dashboards' },
    { icon: FaShieldAlt, name: 'Secure Monitoring', desc: '24/7 tracking without data risks' }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-background text-foreground sm:px-6 lg:px-8">
      {/* Subtle background gradient for depth, using theme vars from index.css */}
      <div className="absolute inset-0 gradient-hero opacity-20" />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center min-h-[70vh]">
        {/* Left Column: Enhanced - Benefits + Products with Staggered Animations */}
        {/* Why: Fills space with value props to build trust; animations encourage scrolling/reading */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} // Framer Motion: Slide in from left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6 text-center lg:w-1/2 lg:text-left"
        >
          {/* Hero Header: Bold, animated title */}
          <motion.div className="animate-fade-in-up">
            <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              <span className="block text-secondary">Join Spaceway</span>
              <span className="block mt-2 text-primary">Today</span>
            </h1>
            <p className="max-w-md mx-auto text-lg leading-relaxed text-muted-foreground lg:mx-0">
              Transform your SME with automated tools that save time and maximize profits. Join 10K+ businesses scaling smarter.
            </p>
          </motion.div>

          {/* Benefits List: Icon-bulleted, staggered animation for flow */}
          <motion.ul 
            className="max-w-md mx-auto space-y-4 lg:mx-0" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ staggerChildren: 0.1 }} // Stagger each item
          >
            {[
              { icon: FaCheckSquare, text: 'Automate repricing across Amazon & Flipkart' },
              { icon: FaCheckSquare, text: 'Track competitors 24/7 for competitive edge' },
              { icon: FaCheckSquare, text: 'Analyze turnover to boost profitability by up to 40%' },
            //   { icon: FaCheckSquare, text: 'Scalable for 10K+ SKUs with zero hassle' },
              { icon: FaCheckSquare, text: 'Secure data with enterprise-grade encryption' }
            ].map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }} // Start offset
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3 transition-colors duration-300 text-foreground hover:text-primary" // Hover for engagement
              >
                <benefit.icon size={20} className="flex-shrink-0 text-success" />
                <span>{benefit.text}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Product Highlights: Float-animated cards, hover scale for interactivity */}
          <div className="mt-8 space-y-4">
            <h3 className="mb-4 text-xl font-bold text-foreground animate-fade-in">Discover Our Core Products</h3>
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }} // Stagger reveal
                className="flex items-center p-4 space-x-3 transition-all rounded-lg cursor-pointer glass-card animate-float hover:bg-accent/50" // Glassmorphism + float from index.css
                whileHover={{ scale: 1.05 }} // Framer: Subtle scale on hover
              >
                <product.icon size={24} className="flex-shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Registration Form - Icon-enhanced fields for beauty/UX */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} // Slide in from right
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={cn("lg:w-1/2 w-full max-w-md", "space-y-6 animate-fade-in-up")}
        >
          {/* Form Container: Glass card for modern, elevated look */}
          <div className="p-8 glass-card rounded-2xl shadow-professional-xl">
            {/* Header: Animated icon + title for welcoming feel */}
            <div className="flex flex-col items-center justify-center mb-8 space-y-3 text-center">
              <motion.div 
                initial={{ scale: 0.8 }} 
                animate={{ scale: 1 }} 
                transition={{ duration: 0.5 }}
                className="mx-auto mb-4"
              >
                <FaUser size={48} className="text-secondary" />
              </motion.div>
              <h2 className="text-2xl font-bold text-foreground">Create Your Account</h2>
              <p className="text-muted-foreground">Unlock powerful tools in minutes</p>
            </div>

            {/* Form: Stacked fields with icons, validation feedback */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Fields: Grid for desktop, stacked mobile; icons for visual consistency */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative">
                  <FaUser className="absolute text-lg transform -translate-y-1/2 pointer-events-none left-3 top-1/2 text-muted-foreground" />
                  <input 
                    id="firstName"
                    type="text"
                    {...register('firstName', registerSchema.firstName)} // Bind schema for validation
                    className={cn(
                      "w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300",
                      errors.firstName && "border-destructive focus:ring-destructive"
                    )}
                    placeholder="First Name"
                    disabled={isLoading}
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-destructive">{errors.firstName.message}</p>}
                </div>
                <div className="relative">
                  <FaUser className="absolute text-lg transform -translate-y-1/2 pointer-events-none left-3 top-1/2 text-muted-foreground" />
                  <input 
                    id="lastName"
                    type="text"
                    {...register('lastName', registerSchema.lastName)}
                    className={cn(
                      "w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300",
                      errors.lastName && "border-destructive focus:ring-destructive"
                    )}
                    placeholder="Last Name"
                    disabled={isLoading}
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-destructive">{errors.lastName.message}</p>}
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <FaEnvelope className="absolute text-lg transform -translate-y-1/2 pointer-events-none left-3 top-1/2 text-muted-foreground" />
                <input 
                  id="email"
                  type="email"
                  {...register('email', registerSchema.email)}
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300",
                    errors.email && "border-destructive focus:ring-destructive"
                  )}
                  placeholder="your@email.com"
                  disabled={isLoading}
                />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
              </div>

              {/* Password Field with Visibility Toggle */}
              <div className="relative">
                <FaLock className="absolute text-lg transform -translate-y-1/2 pointer-events-none left-3 top-1/2 text-muted-foreground" />
                <input 
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', registerSchema.password)}
                  className={cn(
                    "w-full pl-10 pr-10 py-3 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300",
                    errors.password && "border-destructive focus:ring-destructive"
                  )}
                  placeholder="At least 8 characters"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute transition-colors transform -translate-y-1/2 right-3 top-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
                {errors.password && <p className="mt-1 text-sm text-destructive">{errors.password.message}</p>}
              </div>

              {/* Contact Field */}
              <div className="relative">
                <FaPhone className="absolute text-lg transform -translate-y-1/2 pointer-events-none left-3 top-1/2 text-muted-foreground" />
                <input 
                  id="contact"
                  type="tel"
                  {...register('contact', registerSchema.contact)}
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300",
                    errors.contact && "border-destructive focus:ring-destructive"
                  )}
                  placeholder="e.g., 9876543210"
                  disabled={isLoading}
                />
                {errors.contact && <p className="mt-1 text-sm text-destructive">{errors.contact.message}</p>}
              </div>

              {/* Services Multi-Select: Scrollable, highlighted on selection */}
              <div>
                <label className="block mb-3 text-sm font-medium text-foreground">
                  Services Required (Select at least one)
                </label>
                <div className="space-y-3 overflow-y-auto max-h-48"> {/* Scrollable container for mobile */}
                  {servicesOptions.map((service) => (
                    <motion.label
                      key={service.id}
                      className={cn(
                        "flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-accent cursor-pointer transition-all duration-300",
                        selectedServices.includes(service.id) && "bg-primary/10 border-primary text-primary" // Visual feedback on select
                      )}
                      whileHover={{ scale: 1.02 }} // Subtle hover for engagement
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="w-4 h-4 mt-1 border-2 rounded text-primary focus:ring-primary"
                      />
                      <div>
                        <p className="font-medium text-foreground">{service.label}</p>
                        <p className="text-xs text-muted-foreground">{service.description}</p>
                      </div>
                    </motion.label>
                  ))}
                </div>
                {selectedServices.length === 0 && <p className="mt-1 text-sm text-warning">Please select at least one service</p>}
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  id="terms"
                  type="checkbox"
                  {...register('terms', registerSchema.terms)}
                  className="w-4 h-4 mt-1 border-2 rounded text-primary focus:ring-primary"
                />
                <label htmlFor="terms" className="text-sm cursor-pointer select-none text-foreground">
                  I accept the <Link to="/terms" className="underline text-primary">Terms and Conditions</Link>
                </label>
              </div>
              {errors.terms && <p className="mt-1 text-sm text-destructive">{errors.terms.message}</p>}

              {/* Submit Button: Disabled if no services or loading; hover scale */}
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full transition-transform duration-300 group hover:scale-105"
                disabled={isLoading || selectedServices.length === 0}
                iconName={isLoading ? "loading" : "userPlus"}
                iconPosition="left"
              >
                {isLoading ? 'Creating Account...' : 'Sign Up Now'}
              </Button>
            </form>

            {/* Footer Link: Encourage existing users */}
            <div className="pt-4 mt-6 text-center border-t border-border">
              <p className="text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="font-medium transition-colors text-primary hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;