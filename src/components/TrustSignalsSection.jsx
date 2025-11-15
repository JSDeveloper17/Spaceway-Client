import React from 'react'
import Button from './ui/Button'
import AppIcon from './AppIcon'
import AppImage from './AppImage'
import { cn } from '../utils/cn'
import { Link } from 'react-router-dom'

const TrustSignalsSection = () => {
  const marketplaceIntegrations = [
    {
      name: 'Amazon',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_12240984b-1761929731680.png",
      logoAlt: 'Amazon marketplace logo in orange and black colors',
      status: 'Certified Partner'
    },
    {
      name: 'Flipkart',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_161f3802d-1761929733270.png",
      logoAlt: 'Flipkart marketplace logo in blue and yellow colors',
      status: 'Verified Integration'
    },
    {
      name: 'Myntra',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c4c42a28-1761929734208.png",
      logoAlt: 'Myntra fashion marketplace logo in red and white colors',
      status: 'API Partner'
    },
    {
      name: 'Shopify',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_12c1c7d9c-1761929736047.png",
      logoAlt: 'Shopify e-commerce platform logo in green and white colors',
      status: 'App Store Listed'
    },
    {
      name: 'WooCommerce',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_122ad5639-1761929735107.png",
      logoAlt: 'WooCommerce plugin logo in purple and white colors',
      status: 'Plugin Available'
    },
    {
      name: 'Magento',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e432e886-1761929732852.png",
      logoAlt: 'Magento e-commerce platform logo in orange and black colors',
      status: 'Extension Ready'
    }
  ]

  const securityCertifications = [
    {
      icon: 'shield',
      title: 'SSL Secured',
      description: '256-bit encryption'
    },
    {
      icon: 'lock',
      title: 'GDPR Compliant',
      description: 'Data protection certified'
    },
    {
      icon: 'checkCircle',
      title: 'ISO 27001',
      description: 'Security management'
    },
    {
      icon: 'award',
      title: 'SOC 2 Type II',
      description: 'Audited security controls'
    }
  ]

  const userStats = [
    {
      number: '10,000+',
      label: 'Active Users',
      icon: 'users',
      color: 'text-primary'
    },
    {
      number: '50M+',
      label: 'Products Tracked',
      icon: 'package',
      color: 'text-secondary'
    },
    {
      number: '₹500Cr+',
      label: 'Revenue Optimized',
      icon: 'trendingUp',
      color: 'text-warning'
    },
    {
      number: '99.9%',
      label: 'Uptime SLA',
      icon: 'clock',
      color: 'text-info'
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden sm:py-24 lg:py-32 bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-background via-muted/30 to-background" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium border rounded-full bg-primary/10 dark:bg-primary/20 text-primary backdrop-blur-sm border-primary/20">
            <AppIcon name="award" size={16} className="mr-2" />
            Trusted & Secure
          </div>
          
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-foreground sm:mb-6">
            Trusted by Industry Leaders
            <span className="block mt-2 text-primary">Secured by Design</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-base leading-relaxed sm:text-lg lg:text-xl text-muted-foreground">
            Enterprise-grade security, certified integrations, and proven results across thousands of businesses.
          </p>
        </div>

        {/* User Statistics */}
        <div className="grid grid-cols-2 gap-4 mb-12 lg:grid-cols-4 sm:gap-6 sm:mb-16">
          {userStats.map((stat, index) => (
            <div 
              key={index} 
              className={cn(
                "text-center bg-card rounded-xl p-4 sm:p-6 border border-border shadow-professional",
                "hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-1",
                "animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 mb-3 rounded-lg sm:w-12 sm:h-12 bg-muted sm:mb-4">
                <AppIcon name={stat.icon} size={20} className={stat.color} />
              </div>
              <div className={cn("text-xl sm:text-2xl lg:text-3xl font-bold mb-1", stat.color)}>
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Marketplace Integrations */}
        <div className="mb-12 sm:mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="mb-6 text-xl font-semibold text-center sm:text-2xl lg:text-3xl text-foreground sm:mb-8">
            Seamless Marketplace Integrations
          </h3>
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6">
            {marketplaceIntegrations.map((marketplace, index) => (
              <div 
                key={index} 
                className={cn(
                  "group bg-card rounded-lg p-3 sm:p-4 border border-border shadow-professional",
                  "hover:shadow-professional-md transition-all duration-300 hover:-translate-y-1",
                  "animate-fade-in-up"
                )}
                style={{ animationDelay: `${0.5 + index * 0.05}s` }}
              >
                <div className="space-y-2 text-center sm:space-y-3">
                  <div className="flex items-center justify-center h-10 p-2 overflow-hidden rounded-lg sm:h-12 bg-muted">
                    <AppImage
                      src={marketplace.logo}
                      alt={marketplace.logoAlt}
                      className="object-contain w-auto h-6 transition-transform duration-300 sm:h-8 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground sm:text-sm">
                      {marketplace.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {marketplace.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Certifications */}
        <div className="mb-12 sm:mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="mb-6 text-xl font-semibold text-center sm:text-2xl lg:text-3xl text-foreground sm:mb-8">
            Enterprise Security & Compliance
          </h3>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {securityCertifications.map((cert, index) => (
              <div 
                key={index} 
                className={cn(
                  "bg-card rounded-lg p-4 sm:p-6 border border-border shadow-professional text-center",
                  "hover:shadow-professional-md transition-all duration-300 hover:-translate-y-1",
                  "animate-fade-in-up"
                )}
                style={{ animationDelay: `${0.9 + index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-lg bg-secondary/10 dark:bg-secondary/20 sm:mb-4">
                  <AppIcon name={cert.icon} size={24} className="text-secondary" />
                </div>
                <h4 className="mb-2 text-sm font-semibold text-foreground sm:text-base">
                  {cert.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className={cn(
          "bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10",
          "dark:from-primary/20 dark:via-secondary/20 dark:to-primary/20",
          "rounded-2xl p-6 sm:p-8 lg:p-12 text-center border border-border/50 backdrop-blur-sm",
          "animate-fade-in-up"
        )} style={{ animationDelay: '1.2s' }}>
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl text-foreground">
              Join 10,000+ SMEs Already Growing with Spaceway
            </h3>
            
            <p className="text-base leading-relaxed sm:text-lg text-muted-foreground">
              Start your free trial today and see why businesses trust Spaceway for their pricing automation needs.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-xs sm:gap-6 sm:text-sm text-muted-foreground sm:mb-6">
              <div className="flex items-center space-x-2">
                <AppIcon name="check" size={14} className="flex-shrink-0 text-secondary" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <AppIcon name="check" size={14} className="flex-shrink-0 text-secondary" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <AppIcon name="check" size={14} className="flex-shrink-0 text-secondary" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <AppIcon name="check" size={14} className="flex-shrink-0 text-secondary" />
                <span>24/7 support</span>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/register" className="inline-block">
                <Button
                  variant="default"
                  size="lg"
                  iconName="rocket"
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Start Free Trial
                </Button>
              </Link>
              
              <Link to="/register" className="inline-block">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="calendar"
                  iconPosition="left"
                  className="w-full sm:w-auto hover:bg-primary hover:text-primary-foreground"
                >
                  Schedule Demo
                </Button>
              </Link>
            </div>

            {/* Footer Note */}
            <p className="pt-4 text-xs border-t text-muted-foreground border-border/50">
              Trusted by SMEs across India • GDPR Compliant • Enterprise Security
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSignalsSection



