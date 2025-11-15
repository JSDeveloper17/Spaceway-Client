import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Button from '../components/ui/Button.jsx';
import AppIcon from '../components/AppIcon.jsx';
import { cn } from '../utils/cn.js'; // Your existing cn
import { Link } from 'react-router-dom';

const demoFeatures = [
  {
    id: 'dashboard',
    title: 'Analytics Dashboard',
    description: 'Real-time insights across all your marketplaces',
    icon: 'layout-dashboard',
    preview: '/api/placeholder/800/500', // Update to local image in public/
    highlights: [
      'Multi-marketplace performance tracking',
      'Revenue and profit analytics',
      'Inventory level monitoring',
      'Competitor price alerts',
    ],
  },
  {
    id: 'repricing',
    title: 'Automated Repricing',
    description: 'Smart pricing rules that maximize profits',
    icon: 'refreshCw',
    preview: '/api/placeholder/800/500',
    highlights: [
      'MRP-based pricing strategies',
      'Competitor-aware adjustments',
      'Margin protection rules',
      'A/B testing capabilities',
    ],
  },
  {
    id: 'analytics',
    title: 'Turnover Calculator',
    description: 'Comprehensive business intelligence tools',
    icon: 'calculator',
    preview: '/api/placeholder/800/500',
    highlights: [
      'Interactive turnover calculator',
      'Profit margin optimization',
      'Growth opportunity analysis',
      'Export to Excel/PDF',
    ],
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    description: 'Advanced SKU and stock level optimization',
    icon: 'package',
    preview: '/api/placeholder/800/500',
    highlights: [
      'Multi-location inventory sync',
      'Automated reorder points',
      'Dead stock identification',
      'Demand forecasting',
    ],
  },
];

const testimonials = [
  {
    name: 'Rajesh Patel',
    role: 'E-commerce Manager',
    company: 'TechGadgets India',
    content: 'Spaceway increased our profit margins by 45% in just 3 months. The automated repricing is a game-changer!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=rajesh2',
    results: '+45% Profit Margin',
  },
  {
    name: 'Sunita Sharma',
    role: 'Business Owner',
    company: 'Fashion Hub',
    content: 'The analytics dashboard gives me insights I never had before. I can now make data-driven decisions confidently.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sunita1',
    results: '+60% Revenue Growth',
  },
  {
    name: 'Amit Verma',
    role: 'Operations Head',
    company: 'ElectroWorld',
    content: "Inventory management became so much easier. We haven't had stockouts since implementing Spaceway.",
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=amit2',
    results: 'Zero Stockouts',
  },
];

const demoStats = [
  { value: '10,000+', label: 'Active Users', icon: 'users' },
  { value: '₹500Cr+', label: 'Revenue Managed', icon: 'barChart3' },
  { value: '1M+', label: 'Products Tracked', icon: 'package' },
  { value: '99.9%', label: 'Uptime', icon: 'shieldCheck' },
];

export default function Demo() {
  const [activeFeature, setActiveFeature] = useState('dashboard');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const activeFeatureData = useMemo(() => demoFeatures.find(f => f.id === activeFeature), [activeFeature]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    alert("Thank you! We'll schedule your demo within 24 hours.");
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen -mt-20 transition-colors duration-300 bg-background text-foreground">
      {/* <Navigation /> */}
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 text-4xl font-bold md:text-6xl"
              >
                <span>Experience</span>{' '}
                <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">
                  Spaceway
                </span>
                <br />
                <span>in Action</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-4xl mx-auto mb-8 text-xl text-muted-foreground"
              >
                See how Spaceway can transform your e-commerce operations with our interactive product demonstration. Book a personalized demo or explore our features below.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col justify-center gap-4 sm:flex-row"
              >
                <Link to="/register">
                <Button size="lg" iconName="video" iconPosition="left">
                  Schedule Live Demo
                </Button>
                </Link>
                <Link to="/">
                <Button size="lg" variant="outline" iconName="play" iconPosition="left">
                  Watch Video Tour
                </Button>
                </Link>
              </motion.div>
            </div>

            {/* Demo Stats */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {demoStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-6 text-center glass-card rounded-2xl shadow-professional-lg"
                >
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-primary/10 dark:bg-primary/20 rounded-xl">
                    <AppIcon name={stat.icon} size={24} className="text-primary" aria-hidden="true" />
                  </div>
                  <div className="mb-1 text-2xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-20">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                <span>Interactive</span>{' '}
                <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">
                  Product Demo
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
                Explore our key features with live examples and real data
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
              {/* Feature Navigation */}
              <div className="lg:col-span-1">
                <div className="sticky space-y-4 top-8">
                  {demoFeatures.map((feature, index) => (
                    <motion.button
                      key={feature.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setActiveFeature(feature.id)}
                      className={cn(
                        "w-full text-left p-4 rounded-2xl transition-all duration-300 glass-card",
                        activeFeature === feature.id && "ring-2 ring-primary bg-primary/10 dark:bg-primary/20"
                      )}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20">
                          <AppIcon name={feature.icon} size={20} className="text-primary" aria-hidden="true" />
                        </div>
                        <h3 className="font-semibold">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Demo Preview */}
              <div className="lg:col-span-3">
                {activeFeatureData && (
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden glass-card rounded-3xl shadow-professional-xl"
                  >
                    {/* Demo Header */}
                    <div className="p-8 border-b border-border">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl">
                          <AppIcon name={activeFeatureData.icon} size={24} className="text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="mb-1 text-2xl font-bold">
                            {activeFeatureData.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {activeFeatureData.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Demo Content */}
                    <div className="p-8">
                      <div className="grid gap-8 md:grid-cols-2">
                        {/* Preview Image Placeholder */}
                        <div className="flex items-center justify-center border aspect-video gradient-hero rounded-2xl border-border">
                          <div className="text-center">
                            <AppIcon name={activeFeatureData.icon} size={80} className="mx-auto mb-4 text-primary/40" aria-hidden="true" />
                            <h4 className="mb-2 text-lg font-semibold">
                              Live Demo Preview
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Interactive feature demonstration
                            </p>
                          </div>
                        </div>

                        {/* Feature Highlights */}
                        <div>
                          <h4 className="mb-4 text-lg font-semibold">
                            Key Highlights
                          </h4>
                          <ul className="space-y-3">
                            {activeFeatureData.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-center gap-3">
                                <AppIcon name="checkCircle" size={20} className="text-success" aria-hidden="true" />
                                <span className="text-foreground/80">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6">
                            <Button size="lg" iconName="play" iconPosition="left">
                              Try This Feature
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                Watch Spaceway in Action
              </h2>
              <p className="text-xl text-muted-foreground">
                3-minute overview of how Spaceway transforms e-commerce operations
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden aspect-video bg-foreground/10 rounded-3xl shadow-professional-xl"
            >
              <div className="absolute inset-0 gradient-primary opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="flex items-center justify-center w-20 h-20 transition-all duration-300 rounded-full bg-card/20 backdrop-blur-sm hover:bg-card/30 group"
                  aria-label="Play video tour"
                >
                  <AppIcon name="play" size={32} className="transition-transform duration-300 text-card group-hover:scale-110" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6 text-card">
                <h3 className="mb-1 text-xl font-semibold">
                  Spaceway Product Tour
                </h3>
                <p className="text-sm opacity-80">
                  See how we help businesses grow
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                Success Stories
              </h2>
              <p className="text-xl text-muted-foreground">
                See how businesses like yours achieved remarkable results
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 transition-all duration-300 glass-card rounded-3xl shadow-professional-xl"
                >
                  {/* Result Badge */}
                  <div className="inline-block px-3 py-1 mb-6 text-sm font-semibold rounded-full bg-success/10 dark:bg-success/20 text-success">
                    {testimonial.results}
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <AppIcon key={i} name="star" size={20} className="text-warning" aria-hidden="true" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="mb-6 leading-relaxed text-foreground/80">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover w-12 h-12 rounded-full"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-sm font-medium text-primary">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Demo Form */}
        <section className="py-20 gradient-primary text-primary-foreground">
          <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                Ready to See Your Business Transform?
              </h2>
              <p className="text-xl opacity-90">
                Schedule a personalized demo and discover how Spaceway can boost your profits
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 glass-card rounded-3xl shadow-professional-xl"
            >
              <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 transition-all border border-border/50 dark:border-border/50 rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 transition-all border border-border/50 dark:border-border/50 rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 transition-all border border-border/50 dark:border-border/50 rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-4 py-3 transition-all border border-border/50 dark:border-border/50 rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm font-medium">
                    Tell us about your business
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 transition-all border resize-none border-border/50 dark:border-border/50 rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Number of products, marketplaces you use, current challenges..."
                  />
                </div>

                <div className="md:col-span-2">
                  <Button type="submit" size="lg" className="w-full" iconName="calendar" iconPosition="left">
                    Schedule My Demo
                  </Button>
                  <p className="mt-3 text-sm text-center opacity-80">
                    No commitment required • 30-minute session • Get instant insights
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}