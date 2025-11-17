import React, { useState } from 'react'
//import Logo from '../assets/LighLogo.JPG'
import Button from './ui/Button'
import AppIcon from './AppIcon'
import { cn } from '../utils/cn'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [email, setEmail] = useState('')

  const footerLinks = {
    product: [
      { name: 'Features', href: '/products' },
      { name: 'Pricing', href: '/products' },
      { name: 'Integrations', href: '/product#integrations' },
      { name: 'API Documentation', href: '/support' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/about' },
      { name: 'Contact', href: '/support' },
      { name: 'Blog', href: '/support' },
    ],
    resources: [
      { name: 'Help Center', href: '/support' },
      { name: 'Tutorials', href: '/support' },
      { name: 'Demo', href: '/demo' },
      { name: 'Calculator', href: '/turnover' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ],
  }

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
  ]

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  // Simple SVG icons for social media
  const SocialIcon = ({ name, className }) => {
    const icons = {
      twitter: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
        </svg>
      ),
      linkedin: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      facebook: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
        </svg>
      ),
      instagram: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
      youtube: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"/>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
        </svg>
      ),
    }
    return icons[name] || null
  }

  return (
    <footer className="border-t bg-card border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:py-16">
          <div className="gap-8 lg:flex lg:items-center lg:justify-between">
            <div className="mb-6 lg:max-w-xl lg:mb-0">
              <h2 className="mb-3 text-2xl font-bold sm:text-3xl lg:text-4xl sm:mb-4 text-foreground">
                Stay ahead of the competition
              </h2>
              <p className="text-sm leading-relaxed sm:text-base lg:text-lg text-muted-foreground">
                Get the latest insights, tips, and updates on e-commerce analytics and pricing strategies.
              </p>
            </div>
            
            <div className="flex-shrink-0 lg:mt-0 lg:ml-8">
              <form onSubmit={handleNewsletterSubmit} className="gap-2 sm:flex sm:max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    "flex-1 min-w-0 px-4 py-3 bg-background border border-input rounded-lg sm:rounded-r-none",
                    "text-foreground placeholder:text-muted-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
                    "transition-all duration-200"
                  )}
                  required
                />
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  iconName="arrowRight"
                  iconPosition="right"
                  className="w-full mt-3 sm:mt-0 sm:w-auto sm:rounded-l-none"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4 sm:mb-6">
              <Logo size="small" />
              {/* <img src={Logo} alt="" srcset="" sizes='small' /> */}
            </div>
            <p className="max-w-md mb-6 text-sm leading-relaxed sm:text-base text-muted-foreground sm:mb-8">
              Transform your e-commerce business with intelligent pricing strategies, real-time analytics, and automated competitor tracking.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={cn(
                    "w-10 h-10 sm:w-12 sm:h-12 bg-muted hover:bg-primary rounded-lg",
                    "flex items-center justify-center transition-all duration-200",
                    "hover:scale-110 hover:text-primary-foreground",
                    "text-muted-foreground hover:text-primary-foreground"
                  )}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon name={social.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-3 sm:grid-cols-2 md:grid-cols-4 sm:gap-8">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground sm:text-base">
                Product
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 text-muted-foreground hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground sm:text-base">
                Company
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 text-muted-foreground hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground sm:text-base">
                Resources
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 text-muted-foreground hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground sm:text-base">
                Legal
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 text-muted-foreground hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-center sm:text-sm text-muted-foreground md:text-left">
              &copy; 2025 Spaceway. All rights reserved. Build by Spaceway Tech Team.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <span className="text-xs sm:text-sm text-muted-foreground">
                Made in India 🇮🇳
              </span>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <AppIcon name="shield" size={14} className="text-secondary" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

