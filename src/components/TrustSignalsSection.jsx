import React from 'react'
import { motion } from 'framer-motion';
import Button from './ui/Button'
import AppIcon from './AppIcon'
import AppImage from './AppImage'
import { cn } from '../utils/cn'
import { Link } from 'react-router-dom'

import AmazonLogo from '../assets/Logos/Amazon.jpg'
import FlipkartLogo from '../assets/Logos/Flipkart.png'
import MyntraLogo from '../assets/Logos/Myntra.png'
import ShopifyLogo from '../assets/Logos/Shopify.jpg'
import WooLogo from '../assets/Logos/WooCommerce.png'
import MagentoLogo from '../assets/Logos/Magento.avif'

const logos = [
  { name: 'Amazon', src: AmazonLogo, alt: 'Amazon logo', status: "Certified Partner" },
  { name: 'Flipkart', src: FlipkartLogo, alt: 'Flipkart logo', status: "Verified Integration" },
  { name: 'Myntra', src: MyntraLogo, alt: 'Myntra logo', status: "API Partner" },
  { name: 'Shopify', src: ShopifyLogo, alt: 'Shopify logo', status: "App Store Listed" },
  { name: 'WooCommerce', src: WooLogo, alt: 'WooCommerce logo', status: "Plugin Available" },
  { name: 'Magento', src: MagentoLogo, alt: 'Magento logo', status: "Extension Ready" },
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}
const item = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 16, stiffness: 120 } },
}

const TrustSignalsSection = () => {
  
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
        {/* <div className="mb-12 sm:mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="mb-6 text-xl font-semibold text-center sm:text-2xl lg:text-3xl text-foreground sm:mb-8">
            Seamless Marketplace Integrations
          </h3>
        </div> */}

     <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mb-12 sm:mb-16"
    >
      {/* heading (optional small subtitle above logos) */}
      <div className="mb-6 text-center">
        <h3 className="text-lg font-semibold sm:text-xl lg:text-2xl text-foreground">
          Seamless Marketplace Integrations
        </h3>
        <p className="max-w-2xl mx-auto mt-2 text-sm text-muted-foreground">
          One-click integrations with major marketplaces and storefronts. Native apps & connectors.
        </p>
      </div>

      {/* Grid for md+, horizontal scroller for xs */}
      <div>
        {/* Mobile: horizontal scroll snap */}
        <div className="px-4 -mx-4 overflow-x-auto md:hidden scroll-smooth">
          <div className="flex items-stretch gap-4 snap-x snap-mandatory">
            {logos.map((logo, i) => (
              <motion.button
                key={logo.name}
                variants={item}
                whileHover={{
                  scale: 1.035,
                }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "snap-start flex-shrink-0 w-[220px] sm:w-[240px] p-3 rounded-xl glass-card border border-border/60",
                  "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                  "transition-transform duration-300"
                )}
                aria-label={`${logo.name} integration`}
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <div
                    className="flex items-center justify-center w-full p-2 overflow-hidden rounded-lg h-14 sm:h-16 bg-muted"
                    style={{ minHeight: 56 }}
                  >
                    <AppImage
                      src={logo.src}
                      alt={logo.alt}
                      className="object-contain transition-transform duration-300 max-h-10 sm:max-h-12 md:max-h-14"
                    />
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-medium text-foreground">{logo.name}</div>
                    <div className="text-xs text-muted-foreground">Integrated</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Desktop / tablet: balanced grid */}
        <div className="hidden md:block">
          <motion.div
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6"
            role="list"
          >
            {logos.map((logo, i) => (
              <motion.div
                key={logo.name}
                variants={item}
                role="listitem"
                whileHover={{
                  scale: 1.04,
                  // subtle two-color glow using rgba based on your theme (works in light & dark)
                  boxShadow:
                    '0 10px 30px rgba(59,130,246,0.08), 0 6px 18px rgba(16,185,129,0.04)',
                }}
                whileTap={{ scale: 0.985 }}
                className={cn(
                  "group p-3 rounded-lg glass-card border border-border/60",
                  "transition-all duration-300 transform hover:-translate-y-1 focus-within:-translate-y-1"
                )}
                tabIndex={0}
                aria-label={`${logo.name} integration card`}
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center justify-center w-full p-2 overflow-hidden rounded-lg h-14 bg-muted">
                    <AppImage
                      src={logo.src}
                      alt={logo.alt}
                      className="object-contain transition-transform duration-300 max-h-10 sm:max-h-12 group-hover:scale-110"
                    />
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-medium text-foreground">{logo.name}</div>
                    <div className="text-xs text-muted-foreground">{logo.status}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>

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

