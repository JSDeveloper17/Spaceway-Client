import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import Button from './ui/Button'
import AppIcon from './AppIcon'
import { cn } from '../utils/cn'
import { Link } from 'react-router-dom'

// 3D Floating Product Icon Component
const FloatingProduct = ({ position, color }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  )
}

// 3D Scene Component
const ProductScene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingProduct position={[-2, 1, 0]} color="#3B82F6" />
      <FloatingProduct position={[2, -1, 0]} color="#10B981" />
      <FloatingProduct position={[0, 2, -2]} color="#F59E0B" />
      <FloatingProduct position={[-1, -2, 1]} color="#EF4444" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
    </>
  )
}

const HeroSection = () => {
  return (
    <section className="relative flex items-center min-h-screen -mt-20 overflow-hidden">
      {/* Background Gradient - Using theme colors */}
      <div className="absolute inset-0 opacity-50 gradient-hero" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-0 rounded-full -left-1/4 w-96 h-96 bg-primary/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 rounded-full -right-1/4 w-96 h-96 bg-secondary/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative w-full px-4 pt-24 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:pt-28 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)] sm:min-h-[80vh]">
          {/* Left Content */}
          <div className="z-10 space-y-8">
            <div className="space-y-6 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-full bg-primary/10 dark:bg-primary/20 text-primary backdrop-blur-sm border-primary/20">
                <AppIcon name="rocket" size={16} className="mr-2 animate-bounce" />
                <span>Trusted by 10,000+ SME Businesses</span>
              </div>
              
              {/* Heading */}
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl text-foreground">
                <span className="block">Automate Your</span>
                <span className="block mt-2 text-primary">Pricing Strategy</span>
                <span className="block mt-2 text-secondary">Boost Profits</span>
              </h1>
              
              {/* Description */}
              <p className="max-w-2xl text-lg leading-relaxed sm:text-xl text-muted-foreground">
                Centralize product listings, track competitors in real-time, and automate repricing across Amazon, Flipkart & more. 
                Increase your turnover by using our data-driven pricing intelligence.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="p-4 text-center transition-all duration-300 border rounded-lg bg-card/50 backdrop-blur-sm border-border hover:border-primary/50">
                <div className="text-2xl font-bold sm:text-3xl text-primary">10K+</div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">Active SKUs</div>
              </div>
              <div className="p-4 text-center transition-all duration-300 border rounded-lg bg-card/50 backdrop-blur-sm border-border hover:border-secondary/50">
                <div className="text-2xl font-bold sm:text-3xl text-secondary">40%</div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">Profit Increase</div>
              </div>
              <div className="p-4 text-center transition-all duration-300 border rounded-lg bg-card/50 backdrop-blur-sm border-border hover:border-warning/50">
                <div className="text-2xl font-bold sm:text-3xl text-warning">24/7</div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">Price Monitoring</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/login" className="inline-block">
                <Button 
                  variant="default" 
                  size="lg" 
                  iconName="play" 
                  iconPosition="left"
                  className="w-full group sm:w-auto"
                >
                  Get Started
                </Button>
              </Link>
              
              <Link to="/register" className="inline-block">
                <Button 
                  variant="outline" 
                  size="lg" 
                  iconName="calendar" 
                  iconPosition="left"
                  className="w-full group sm:w-auto hover:bg-primary hover:text-primary-foreground"
                >
                  Schedule Demo
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <AppIcon name="shield" size={16} className="text-secondary" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <AppIcon name="clock" size={16} className="text-secondary" />
                <span>Real-time Updates</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <AppIcon name="users" size={16} className="text-secondary" />
                <span>Multi-user Support</span>
              </div>
            </div>
          </div>

          {/* Right 3D Scene */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Gradient glow background */}
            <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-3xl" />
            
            {/* 3D Canvas Container */}
            <div className="relative h-full overflow-hidden rounded-2xl glass-card shadow-professional-xl">
              <Suspense fallback={
                <div className="flex items-center justify-center h-full bg-card/50">
                  <div className="w-12 h-12 border-b-2 rounded-full animate-spin border-primary"></div>
                </div>
              }>
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                  <ProductScene />
                </Canvas>
              </Suspense>
            </div>
            
            {/* Floating Info Cards */}
            <div className="absolute p-3 rounded-lg top-4 right-4 sm:top-6 sm:right-6 glass-card shadow-professional animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                <span className="text-xs font-medium text-foreground">Live Price Updates</span>
              </div>
            </div>
            
            <div className="absolute p-3 rounded-lg bottom-4 left-4 sm:bottom-6 sm:left-6 glass-card shadow-professional animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center space-x-2">
                <AppIcon name="trendingUp" size={16} className="text-primary" />
                <span className="text-xs font-medium text-foreground">+15% Revenue</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute z-10 transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <a href="#features" className="flex flex-col items-center space-y-2 transition-colors text-muted-foreground hover:text-foreground">
          <span className="text-xs font-medium">Scroll</span>
          <AppIcon name="chevronDown" size={24} />
        </a>
      </div>
    </section>
  )
}

export default HeroSection

