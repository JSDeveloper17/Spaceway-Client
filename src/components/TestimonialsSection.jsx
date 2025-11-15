import React, { useState, useEffect } from 'react'
import AppIcon from './AppIcon'
import AppImage from './AppImage'
import { cn } from '../utils/cn'

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "E-commerce Manager",
      company: "TechMart Solutions",
      avatar: "https://images.unsplash.com/photo-1588178457501-31b7688a41a0?w=150&h=150&fit=crop",
      avatarAlt: "Professional headshot of Indian man with short black hair in navy blue shirt smiling at camera",
      rating: 5,
      content: `Spaceway transformed our pricing strategy completely. We saw a 35% increase in revenue within the first quarter. The automated repricing feature saved us 20 hours per week, and the competitor tracking is incredibly accurate.`,
      metrics: {
        revenue: "+35%",
        timeSaved: "20hrs/week",
        skus: "2,500+"
      }
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Business Owner",
      company: "Fashion Forward",
      avatar: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2?w=150&h=150&fit=crop",
      avatarAlt: "Professional headshot of Indian woman with long dark hair in white blazer smiling confidently",
      rating: 5,
      content: `The marketplace integration is seamless. Managing products across Amazon, Flipkart, and our website became effortless. The P&L reports help us make data-driven decisions every day.`,
      metrics: {
        revenue: "+42%",
        timeSaved: "15hrs/week",
        skus: "1,800+"
      }
    },
    {
      id: 3,
      name: "Amit Patel",
      title: "Pricing Analyst",
      company: "ElectroHub",
      avatar: "https://images.unsplash.com/photo-1585066047759-3438c34cf676?w=150&h=150&fit=crop",
      avatarAlt: "Professional headshot of Indian man with beard wearing gray suit and glasses",
      rating: 5,
      content: `Real-time competitor monitoring is a game-changer. We get instant alerts when competitors change prices, allowing us to respond immediately. Our profit margins improved by 28%.`,
      metrics: {
        revenue: "+28%",
        timeSaved: "25hrs/week",
        skus: "5,000+"
      }
    },
    {
      id: 4,
      name: "Sneha Reddy",
      title: "Operations Head",
      company: "HomeDecor Plus",
      avatar: "https://images.unsplash.com/photo-1734456611474-13245d164868?w=150&h=150&fit=crop",
      avatarAlt: "Professional headshot of Indian woman with shoulder-length hair in black business suit",
      rating: 5,
      content: `The turnover calculator helped us identify underperforming products and optimize our entire catalog. Customer support is exceptional, and the platform is incredibly user-friendly.`,
      metrics: {
        revenue: "+31%",
        timeSaved: "18hrs/week",
        skus: "3,200+"
      }
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const currentTestimonial = testimonials[currentSlide]

  return (
    <section className="relative py-20 overflow-hidden sm:py-24 lg:py-32 bg-card">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium border rounded-full bg-secondary/10 dark:bg-secondary/20 text-secondary backdrop-blur-sm border-secondary/20">
            <AppIcon name="messageSquare" size={16} className="mr-2" />
            Customer Success Stories
          </div>
          
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-foreground sm:mb-6">
            Trusted by SMEs
            <span className="block mt-2 text-secondary">Across India</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-base leading-relaxed sm:text-lg lg:text-xl text-muted-foreground">
            See how businesses like yours are transforming their pricing strategies and boosting profits with Spaceway.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex justify-center px-4 sm:px-6 lg:px-8">
          {/* Main Testimonial Card */}
          <div className="w-full max-w-6xl p-6 mx-auto overflow-hidden border sm:p-8 lg:p-12 bg-background border-border rounded-2xl shadow-professional-lg animate-fade-in">
            <div className="grid items-center gap-6 lg:grid-cols-3 lg:gap-8">
              {/* Testimonial Content */}
              <div className="space-y-4 lg:col-span-2 sm:space-y-6">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(currentTestimonial?.rating)].map((_, i) => (
                    <AppIcon 
                      key={i} 
                      name="star" 
                      size={18} 
                      className="fill-current text-warning" 
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base leading-relaxed sm:text-lg lg:text-xl text-foreground">
                  "{currentTestimonial?.content}"
                </blockquote>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-3 text-center border rounded-lg sm:p-4 bg-primary/10 dark:bg-primary/20 border-primary/20">
                    <div className="text-lg font-bold sm:text-xl lg:text-2xl text-primary">
                      {currentTestimonial?.metrics?.revenue}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">Revenue Growth</div>
                  </div>
                  <div className="p-3 text-center border rounded-lg sm:p-4 bg-secondary/10 dark:bg-secondary/20 border-secondary/20">
                    <div className="text-lg font-bold sm:text-xl lg:text-2xl text-secondary">
                      {currentTestimonial?.metrics?.timeSaved}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">Time Saved</div>
                  </div>
                  <div className="p-3 text-center border rounded-lg sm:p-4 bg-warning/10 dark:bg-warning/20 border-warning/20">
                    <div className="text-lg font-bold sm:text-xl lg:text-2xl text-warning">
                      {currentTestimonial?.metrics?.skus}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">SKUs Managed</div>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="space-y-4 text-center lg:text-left">
                <div className="relative inline-block">
                  <AppImage
                    src={currentTestimonial?.avatar}
                    alt={currentTestimonial?.avatarAlt}
                    className="object-cover w-20 h-20 mx-auto transition-transform duration-300 border-4 rounded-full sm:w-24 sm:h-24 lg:w-28 lg:h-28 lg:mx-0 border-primary/20 shadow-professional hover:scale-105"
                  />

                  <div className="absolute flex items-center justify-center border-2 rounded-full shadow-lg -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 bg-secondary border-background">
                    <AppIcon name="check" size={14} className="text-white" />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-base font-semibold sm:text-lg lg:text-xl text-foreground">
                    {currentTestimonial?.name}
                  </h4>
                  <p className="text-sm font-medium text-primary">
                    {currentTestimonial?.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial?.company}
                  </p>
                </div>

                {/* Company Badge */}
                <div className="inline-flex items-center px-3 py-1.5 bg-muted rounded-full text-xs text-muted-foreground">
                  <AppIcon name="building" size={12} className="mr-1.5" />
                  Verified Customer
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={cn(
              "absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2",
              "w-10 h-10 sm:w-12 sm:h-12 bg-card border border-border rounded-full",
              "flex items-center justify-center shadow-professional",
              "hover:shadow-professional-md transition-all duration-200 hover:scale-110",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "z-10"
            )}
            aria-label="Previous testimonial"
          >
            <AppIcon name="chevronLeft" size={18} className="text-foreground" />
          </button>
          
          <button
            onClick={nextSlide}
            className={cn(
              "absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2",
              "w-10 h-10 sm:w-12 sm:h-12 bg-card border border-border rounded-full",
              "flex items-center justify-center shadow-professional",
              "hover:shadow-professional-md transition-all duration-200 hover:scale-110",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "z-10"
            )}
            aria-label="Next testimonial"
          >
            <AppIcon name="chevronRight" size={18} className="text-foreground" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2 sm:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200",
                index === currentSlide
                  ? "bg-primary scale-125 w-8 sm:w-10"
                  : "bg-border hover:bg-muted-foreground"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        {/* <div className="flex justify-center mt-4 sm:mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center px-2 py-1 space-x-2 text-xs transition-colors rounded-lg sm:text-sm text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
          >
            <AppIcon name={isAutoPlaying ? 'pause' : 'play'} size={14} />
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default TestimonialsSection



