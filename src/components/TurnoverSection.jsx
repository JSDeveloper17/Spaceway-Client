import React, { useState } from 'react'
import Button from './ui/Button'
import Input from './ui/Input'
import AppIcon from './AppIcon'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { cn } from '../utils/cn'

const TurnoverSection = () => {
  const [calculatorData, setCalculatorData] = useState({
    currentPrice: '',
    monthlySales: '',
    competitorPrice: ''
  })
  
  const [showResults, setShowResults] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCalculatorData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (error) setError('')
  }

  const calculateResults = () => {
    const current = parseFloat(calculatorData.currentPrice) || 0
    const monthly = parseFloat(calculatorData.monthlySales) || 0
    const competitor = parseFloat(calculatorData.competitorPrice) || 0
    
    if (current <= 0 || monthly <= 0 || competitor <= 0) {
      setError('Please enter valid numbers greater than 0')
      setShowResults(false)
      return
    }

    setShowResults(true)
    setError('')
  }

  const getChartData = () => {
    const current = parseFloat(calculatorData.currentPrice) || 0
    const monthly = parseFloat(calculatorData.monthlySales) || 0
    const competitor = parseFloat(calculatorData.competitorPrice) || 0
    
    const currentRevenue = current * monthly
    const optimizedPrice = Math.min(competitor * 0.95, current * 1.1)
    const optimizedRevenue = optimizedPrice * monthly * 1.2 // Assuming 20% volume increase
    
    return [
      {
        name: 'Current',
        revenue: currentRevenue,
        price: current
      },
      {
        name: 'Optimized',
        revenue: optimizedRevenue,
        price: optimizedPrice
      }
    ]
  }

  const chartData = getChartData()
  const potentialIncrease = chartData[1]?.revenue > chartData[0]?.revenue 
    ? ((chartData[1]?.revenue - chartData[0]?.revenue) / chartData[0]?.revenue * 100)?.toFixed(1)
    : 0

  return (
    <section className="relative py-20 -mt-20 overflow-hidden sm:py-24 lg:py-32 bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
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
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-full bg-secondary/10 dark:bg-secondary/20 text-secondary backdrop-blur-sm border-secondary/20">
                <AppIcon name="calculator" size={16} className="mr-2" />
                Turnover Calculator
              </div>
              
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-foreground">
                See Your Potential
                <span className="block mt-2 text-secondary">Revenue Growth</span>
              </h2>
              
              <p className="text-base leading-relaxed sm:text-lg lg:text-xl text-muted-foreground">
                Get instant insights into how optimized pricing can boost your turnover. 
                Our AI-powered calculator analyzes your current pricing against market data.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: 'trendingUp', text: 'Increase revenue by up to 40%' },
                { icon: 'target', text: 'Optimize pricing for maximum profit' },
                { icon: 'barChart3', text: 'Real-time market analysis' },
                { icon: 'zap', text: 'Instant calculations & insights' }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 sm:space-x-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-transform duration-300 rounded-lg sm:w-12 sm:h-12 bg-secondary/10 dark:bg-secondary/20 group-hover:scale-110">
                    <AppIcon name={benefit.icon} size={18} className="text-secondary" />
                  </div>
                  <span className="text-sm sm:text-base text-muted-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a href="/authentication" className="inline-block">
                <Button 
                  variant="default" 
                  size="lg" 
                  iconName="calculator" 
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Access Full Calculator
                </Button>
              </a>
            </div>
          </div>

          {/* Right Calculator Widget */}
          <div className={cn(
            "bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-professional-lg",
            "animate-fade-in-up backdrop-blur-sm"
          )} style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="mb-2 text-lg font-semibold sm:text-xl text-foreground">
                  Quick Turnover Preview
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Enter your product details for instant insights
                </p>
              </div>

              {/* Input Fields */}
              <div className="space-y-4">
                <Input
                  label="Current Selling Price (₹)"
                  type="number"
                  name="currentPrice"
                  value={calculatorData.currentPrice}
                  onChange={handleInputChange}
                  placeholder="299"
                  min="0"
                  step="0.01"
                />
                
                <Input
                  label="Monthly Sales Volume"
                  type="number"
                  name="monthlySales"
                  value={calculatorData.monthlySales}
                  onChange={handleInputChange}
                  placeholder="1000"
                  min="0"
                  step="1"
                />
                
                <Input
                  label="Competitor Price (₹)"
                  type="number"
                  name="competitorPrice"
                  value={calculatorData.competitorPrice}
                  onChange={handleInputChange}
                  placeholder="279"
                  min="0"
                  step="0.01"
                  error={error}
                />
              </div>

              <Button 
                variant="default" 
                fullWidth 
                onClick={calculateResults}
                iconName="play"
                iconPosition="left"
                className="mt-2"
              >
                Calculate Preview
              </Button>

              {/* Results Chart */}
              {showResults && (
                <div className="mt-6 space-y-4 animate-fade-in">
                  <div className="h-48 p-2 rounded-lg sm:h-64 bg-muted/30">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                        <CartesianGrid 
                          strokeDasharray="3 3" 
                          stroke="hsl(var(--border))" 
                          opacity={0.3}
                        />
                        <XAxis 
                          dataKey="name" 
                          stroke="hsl(var(--muted-foreground))"
                          fontSize={12}
                        />
                        <YAxis 
                          stroke="hsl(var(--muted-foreground))"
                          fontSize={12}
                        />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: 'hsl(var(--card))',
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px',
                            color: 'hsl(var(--foreground))'
                          }}
                          formatter={(value) => [`₹${value?.toLocaleString('en-IN')}`, 'Revenue']}
                        />
                        <Bar 
                          dataKey="revenue" 
                          fill="hsl(var(--secondary))" 
                          radius={[8, 8, 0, 0]}
                          opacity={0.8}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="p-4 text-center border rounded-lg bg-secondary/10 dark:bg-secondary/20 sm:p-6 border-secondary/20 animate-float">
                    <div className="mb-1 text-3xl font-bold sm:text-4xl text-secondary">
                      +{potentialIncrease}%
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Potential Revenue Increase
                    </div>
                  </div>

                  <div className="space-y-3 text-center">
                    <p className="text-xs text-muted-foreground">
                      This is a simplified preview. Get detailed analysis with our full calculator.
                    </p>
                    
                    <a href="/authentication" className="inline-block">
                      <Button 
                        variant="default" 
                        size="sm" 
                        iconName="arrowRight" 
                        iconPosition="right"
                        className="w-full sm:w-auto"
                      >
                        Get Full Analysis
                      </Button>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TurnoverSection



