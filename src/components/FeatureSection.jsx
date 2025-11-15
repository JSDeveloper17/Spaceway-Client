
import Button from './ui/Button'
import AppIcon from './AppIcon'
import { cn } from '../utils/cn'
import { Link } from 'react-router-dom'

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      icon: 'package',
      title: 'Marketplace Integration',
      description: 'Seamlessly connect with Amazon, Flipkart, and 15+ marketplaces. Centralize all your product listings in one powerful dashboard.',
      benefits: ['Multi-platform sync', 'Bulk operations', 'Real-time inventory'],
      iconBg: 'bg-primary',
      gradient: 'from-primary/20 to-primary/30',
      borderColor: 'border-primary/20',
    },
    {
      id: 2,
      icon: 'eye',
      title: 'Competitor Tracking',
      description: 'Monitor competitor prices 24/7 with intelligent alerts. Get instant notifications when prices change in your market.',
      benefits: ['Real-time monitoring', 'Price alerts', 'Market analysis'],
      iconBg: 'bg-secondary',
      gradient: 'from-secondary/20 to-secondary/30',
      borderColor: 'border-secondary/20',
    },
    {
      id: 3,
      icon: 'zap',
      title: 'Automated Repricing',
      description: 'Set intelligent pricing rules based on MRP, competition, and profit margins. Automate repricing to stay competitive.',
      benefits: ['Rule-based pricing', 'Profit protection', 'Auto-adjustments'],
      iconBg: 'bg-warning',
      gradient: 'from-warning/20 to-warning/30',
      borderColor: 'border-warning/20',
    },
    {
      id: 4,
      icon: 'barChart3',
      title: 'Analytics Dashboard',
      description: 'Comprehensive P&L reports, turnover analysis, and performance metrics. Export data in PDF/Excel formats.',
      benefits: ['P&L reports', 'Turnover insights', 'Export options'],
      iconBg: 'bg-info',
      gradient: 'from-info/20 to-info/30',
      borderColor: 'border-info/20',
    },
  ]

  return (
    <section id="features" className="relative py-20 overflow-hidden sm:py-24 lg:py-32 bg-background">
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

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium border rounded-full bg-primary/10 dark:bg-primary/20 text-primary backdrop-blur-sm border-primary/20">
            <AppIcon name="star" size={16} className="mr-2" />
            Core Features
          </div>
          
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-foreground sm:mb-6">
            Everything You Need to
            <span className="block mt-2 text-primary">Dominate Your Market</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-base leading-relaxed sm:text-lg lg:text-xl text-muted-foreground">
            Powerful tools designed specifically for SMEs to automate pricing, track competitors, 
            and maximize profitability across all marketplaces.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={cn(
                "group relative bg-card rounded-2xl p-6 sm:p-8 border border-border",
                "shadow-professional hover:shadow-professional-lg",
                "transition-all duration-300 hover:-translate-y-2",
                "animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div 
                className={cn(
                  "absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  feature.gradient
                )}
              />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={cn(
                  "inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl mb-4 sm:mb-6",
                  "group-hover:scale-110 transition-transform duration-300",
                  feature.iconBg,
                  "text-white shadow-lg"
                )}>
                  <AppIcon name={feature.icon} size={24} className="text-white" />
                </div>

                {/* Title */}
                <h3 className={cn(
                  "text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4",
                  "group-hover:text-primary transition-colors duration-300"
                )}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed sm:text-base text-muted-foreground sm:mb-6">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <AppIcon 
                        name="check" 
                        size={14} 
                        className="text-secondary mr-2 mt-0.5 flex-shrink-0" 
                      />
                      <span className="flex-1">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link to="/products" className="inline-block">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    iconName="arrowRight" 
                    iconPosition="right"
                    className="w-full group-hover:text-primary sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Hover Effect Border */}
              <div className={cn(
                "absolute inset-0 rounded-2xl border-2 border-transparent",
                "group-hover:border-primary/20 transition-colors duration-300",
                feature.borderColor
              )} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center sm:mt-16 lg:mt-20 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="p-6 border bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 dark:from-primary/20 dark:via-secondary/20 dark:to-primary/20 rounded-2xl sm:p-8 lg:p-12 border-border/50 backdrop-blur-sm">
            <h3 className="mb-3 text-xl font-bold sm:text-2xl lg:text-3xl text-foreground sm:mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="max-w-2xl mx-auto mb-6 text-sm leading-relaxed sm:text-base text-muted-foreground sm:mb-8">
              Join thousands of SMEs already using Spaceway to automate their pricing strategy and boost profits.
            </p>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/login" className="inline-block">
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
              
              <Link to="/support" className="inline-block">
                <Button 
                  variant="outline" 
                  size="lg" 
                  iconName="phone" 
                  iconPosition="left"
                  className="w-full sm:w-auto hover:bg-primary hover:text-primary-foreground"
                >
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection

