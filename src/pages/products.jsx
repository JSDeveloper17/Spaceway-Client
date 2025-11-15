import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Button from '../components/ui/Button.jsx';
import AppIcon from '../components/AppIcon.jsx';
import { cn } from '../utils/cn.js';
import { Link } from 'react-router-dom';
const features = [
  {
    id: 'listings',
    title: 'Marketplace Listings',
    description: 'Connect and manage your products across Amazon, Flipkart, and other major marketplaces',
    icon: 'store',
    color: 'primary',
    details: [
      'Multi-marketplace synchronization',
      'Bulk product upload and management',
      'Automated inventory tracking',
      'Cross-platform analytics',
      'Real-time status monitoring',
      'Performance optimization suggestions',
    ],
    metrics: ['500K+ Products', '99.9% Sync Rate', '24/7 Monitoring'],
  },
  {
    id: 'pricing',
    title: 'Competitor Pricing',
    description: 'Real-time price tracking and competitive intelligence for strategic pricing decisions',
    icon: 'tag',
    color: 'secondary',
    details: [
      'Real-time competitor price monitoring',
      'Price history and trend analysis',
      'Market position insights',
      'Automated price alerts',
      'Competitive landscape mapping',
      'Dynamic pricing recommendations',
    ],
    metrics: ['1M+ Prices Tracked', 'Real-time Updates', '95% Accuracy'],
  },
  {
    id: 'repricing',
    title: 'MRP-Based Repricing',
    description: 'Automated rule-based repricing system to optimize profit margins and competitiveness',
    icon: 'refreshCw',
    color: 'info', // Purple-ish from your vars
    details: [
      'MRP-based pricing rules',
      'Margin protection algorithms',
      'Competitor-aware pricing',
      'Seasonal price adjustments',
      'A/B testing for price points',
      'Performance impact analysis',
    ],
    metrics: ['40% Avg Profit Increase', 'Smart Rules Engine', 'Auto Adjustments'],
  },
  {
    id: 'analytics',
    title: 'P&L Accounting',
    description: 'Comprehensive profit and loss reporting with detailed financial analytics',
    icon: 'barChart3',
    color: 'warning',
    details: [
      'Automated P&L generation',
      'Revenue stream analysis',
      'Cost breakdown tracking',
      'Margin optimization insights',
      'Tax and compliance reporting',
      'Financial forecasting',
    ],
    metrics: ['Complete P&L View', 'Tax Ready Reports', 'Real-time Insights'],
  },
  {
    id: 'stock',
    title: 'SKU & Stock Management',
    description: 'Advanced inventory management with SKU tracking and stock level optimization',
    icon: 'package',
    color: 'secondary',
    details: [
      'Multi-location inventory tracking',
      'SKU performance analytics',
      'Stock level optimization',
      'Automated reorder points',
      'Dead stock identification',
      'Seasonal demand forecasting',
    ],
    metrics: ['10K+ SKUs Managed', 'Zero Stockouts', 'Smart Forecasting'],
  },
  {
    id: 'comparison',
    title: 'MRP Comparison',
    description: 'Detect pricing anomalies and opportunities through comprehensive MRP analysis',
    icon: 'scales', // Closest to scale
    color: 'success',
    details: [
      'Market MRP benchmarking',
      'Price anomaly detection',
      'Competitive gap analysis',
      'Optimization opportunities',
      'Brand positioning insights',
      'Market share analysis',
    ],
    metrics: ['Market Benchmark', 'Anomaly Detection', 'Price Optimization'],
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '₹999',
    period: '/month',
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 100 products',
      'Basic analytics',
      '2 marketplace connections',
      'Email support',
      'Monthly reports',
    ],
    buttonText: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '₹2,999',
    period: '/month',
    description: 'For growing businesses with advanced needs',
    features: [
      'Up to 1,000 products',
      'Advanced analytics',
      '5 marketplace connections',
      'Priority support',
      'Real-time reports',
      'Automated repricing',
    ],
    buttonText: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large enterprises',
    features: [
      'Unlimited products',
      'Custom analytics',
      'All marketplace connections',
      'Dedicated support',
      'Custom integrations',
      'White-label options',
    ],
    buttonText: 'Contact Sales',
    popular: false,
  },
];

export default function Products() {
  const [activeFeature, setActiveFeature] = useState('listings');

  const activeFeatureData = useMemo(() => features.find(f => f.id === activeFeature), [activeFeature]);

  return (
    <div className="min-h-screen -mt-10 transition-colors duration-300 bg-background text-foreground">
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
                <span>Powerful</span>{' '}
                <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">
                  Product Suite
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-4xl mx-auto mb-8 text-xl text-muted-foreground"
              >
                Everything you need to dominate e-commerce: from marketplace management to intelligent pricing, inventory optimization to financial analytics.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col justify-center gap-4 sm:flex-row"
              >
                <Link to="/register">
                <Button size="lg" iconName="play" iconPosition="left">
                  Request Demo
                </Button>
                </Link>
                <Link to="/login">
                <Button size="lg" variant="outline" iconName="rocket" iconPosition="left">
                  Get Started
                </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                Complete E-commerce Solution
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
                Integrated tools that work together to streamline your operations and maximize profitability
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Feature Navigation */}
              <div className="lg:col-span-1">
                <div className="sticky space-y-4 top-8" role="tablist">
                  {features.map((feature, index) => (
                    <motion.button
                      key={feature.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setActiveFeature(feature.id)}
                      role="tab"
                      aria-selected={activeFeature === feature.id}
                      className={cn(
                        "w-full text-left p-6 rounded-2xl transition-all duration-300 glass-card",
                        activeFeature === feature.id && `ring-2 ring-${feature.color} bg-${feature.color}/10 dark:bg-${feature.color}/20`
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-${feature.color}/10 dark:bg-${feature.color}/20 rounded-xl flex items-center justify-center`}>
                          <AppIcon name={feature.icon} size={24} className={`text-${feature.color}`} aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-1 text-lg font-semibold">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Feature Details */}
              <div className="lg:col-span-2">
                {activeFeatureData && (
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 glass-card rounded-3xl shadow-professional-xl"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-16 h-16 bg-${activeFeatureData.color}/10 dark:bg-${activeFeatureData.color}/20 rounded-2xl flex items-center justify-center`}>
                        <AppIcon name={activeFeatureData.icon} size={32} className={`text-${activeFeatureData.color}`} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-3xl font-bold">
                          {activeFeatureData.title}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          {activeFeatureData.description}
                        </p>
                      </div>
                    </div>

                    {/* Feature Details */}
                    <div className="grid gap-8 mb-8 md:grid-cols-2">
                      <div>
                        <h4 className="mb-4 text-xl font-semibold">
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {activeFeatureData.details.map((detail, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <AppIcon name="checkCircle" size={20} className={`text-${activeFeatureData.color}`} aria-hidden="true" />
                              <span className="text-foreground/80">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-4 text-xl font-semibold">
                          Key Metrics
                        </h4>
                        <div className="space-y-4">
                          {activeFeatureData.metrics.map((metric, index) => (
                            <div key={index} className={`p-4 bg-${activeFeatureData.color}/10 dark:bg-${activeFeatureData.color}/20 rounded-xl glass`}>
                              <div className={`text-2xl font-bold text-${activeFeatureData.color} mb-1`}>
                                {metric}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button size="lg" iconName="rocket" iconPosition="left">
                        Try This Feature
                      </Button>
                      <Button size="lg" variant="outline" iconName="bookOpen" iconPosition="left">
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-muted">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold">
                <span>Simple, Transparent</span>{' '}
                <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">
                  Pricing
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
                Choose the perfect plan for your business size and needs
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "glass-card rounded-3xl p-8 relative shadow-professional-lg",
                    plan.popular && "ring-2 ring-primary transform scale-105"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute transform -translate-x-1/2 -top-4 left-1/2">
                      <div className="px-4 py-2 text-sm font-semibold rounded-full bg-primary text-primary-foreground">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-8 text-center">
                    <h3 className="mb-2 text-2xl font-bold">
                      {plan.name}
                    </h3>
                    <div className="mb-2 text-4xl font-bold">
                      {plan.price}
                      {plan.period && <span className="text-lg text-muted-foreground">{plan.period}</span>}
                    </div>
                    <p className="text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="mb-8 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <AppIcon name="checkCircle" size={20} className="text-success" aria-hidden="true" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    size="lg" 
                    variant={plan.popular ? "default" : "outline"}
                    iconName="rocket"
                    iconPosition="left"
                  >
                    {plan.buttonText}
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="mb-4 text-muted-foreground">
                All plans include 14-day free trial. No credit card required.
              </p>
              <div className="flex justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <AppIcon name="shieldCheck" size={16} aria-hidden="true" />
                  <span>99.9% Uptime SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <AppIcon name="lock" size={16} aria-hidden="true" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <AppIcon name="headphones" size={16} aria-hidden="true" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}