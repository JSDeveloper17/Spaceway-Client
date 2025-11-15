
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from './ui/Button'
import AppIcon from './AppIcon'
import { cn } from '../utils/cn'
import { useAuth } from '../contexts/AuthContext'

// Logos
import LightLogo from '../assets/Logo.JPG'
import DarkLogo from '../assets/DarkLogo.PNG'
import DarkLogo1 from "../assets/DarkLogo1.PNG"

const Navbar = () => {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout, isAuthenticated } = useAuth()

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const shouldBeDark = savedTheme === 'dark'
    setIsDark(shouldBeDark)

    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Toggle Theme
  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)

    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const menuItems = [
    { name: 'Home', icon: 'home', path: '/' },
    { name: 'Products', icon: 'folder', path: '/products' },
    { name: 'Turnover', icon: 'calendar', path: '/turnover' },
    { name: 'About us', icon: 'info', path: '/about' },
    { name: 'Support', icon: 'help', path: '/support' },
    { name: 'Demo', icon: 'playCircle', path: '/demo' },
  ]

  const currentPath = location.pathname

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-md'
          : 'bg-background border-b border-border'
      )}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* 🌟 Bigger Dynamic Logo */}
          <Link
            to="/"
            className="flex items-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src={isDark ? DarkLogo : LightLogo}
              alt="Spaceway Logo"
              className="object-contain w-auto transition-opacity duration-300 h-14"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="items-center justify-center flex-1 hidden space-x-1 xmd:flex lg:space-x-2">
            {menuItems.map((item) => {
              const isActive = currentPath === item.path // Exact match for active state
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    'relative flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm underline decoration-2 underline-offset-4' // Full bg + underline on active
                      : 'text-foreground hover:text-accent-foreground hover:underline hover:decoration-2 hover:underline-offset-4 hover:bg-accent/50' // Underline + subtle bg on hover
                  )}
                >
                  <AppIcon
                    name={item.icon}
                    size={18}
                    className={cn('transition-transform duration-200', isActive && 'scale-110')}
                  />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Right Side Buttons (Desktop) */}
          <div className="items-center hidden space-x-3 xmd:flex lg:space-x-4">

            {/* THEME BUTTON */}
            <button
              onClick={toggleTheme}
              className="p-2 transition-all duration-200 rounded-lg hover:bg-accent hover:text-accent-foreground"
              aria-label="Toggle theme"
            >
              <AppIcon name={isDark ? 'sun' : 'moon'} size={20} />
            </button>

            {!isAuthenticated() && (
              <>
                {/* Request Demo → Register (outline variant, hover to primary) */}
                <Button
                  variant="outline" // Changed to outline for initial transparent look
                  size="sm"
                  className="transition-colors hover:bg-primary hover:text-primary-foreground" // Hover matches Get Started
                  onClick={() => navigate('/register')}
                >
                  Request Demo
                </Button>

                {/* Get Started → Register (primary variant) */}
                <Button
                  variant="default"
                  size="default"
                  className="hover:bg-primary/90 hover:text-primary-foreground" // Slight hover variation
                  onClick={() => navigate('/login')}
                >
                  Get Started
                </Button>
              </>
            )}

            {isAuthenticated() && (
              <>
                {/* Dashboard */}
                <Button
                  variant="default"
                  size="default"
                  onClick={() => navigate('/dashboard')}
                >
                  Dashboard
                </Button>

                {/* Logout */}
                <Button
                  variant="destructive"
                  size="default"
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 xmd:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
            >
              <AppIcon name={isDark ? 'sun' : 'moon'} size={20} />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
            >
              <div className="flex flex-col justify-center w-6 h-6 space-y-1">
                <span className={cn('block h-0.5 w-full bg-current transition-all duration-300', isMobileMenuOpen && 'rotate-45 translate-y-2')} />
                <span className={cn('block h-0.5 w-full bg-current transition-all duration-300', isMobileMenuOpen && 'opacity-0')} />
                <span className={cn('block h-0.5 w-full bg-current transition-all duration-300', isMobileMenuOpen && '-rotate-45 -translate-y-2')} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'xmd:hidden transition-all duration-300 ease-in-out',
            isMobileMenuOpen
              ? 'max-h-[600px] opacity-100 visible mt-2 pb-6'
              : 'max-h-0 opacity-0 invisible overflow-hidden'
          )}
        >
          <div className="flex flex-col p-4 space-y-2 border rounded-lg shadow-lg bg-background border-border">
            {menuItems.map((item) => {
              const isActive = currentPath === item.path // Exact match for mobile too
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm underline decoration-2 underline-offset-4' // Full bg + underline on active
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground hover:underline hover:decoration-2 hover:underline-offset-4' // Underline + bg on hover
                  )}
                >
                  <AppIcon
                    name={item.icon}
                    size={20}
                    className={cn('transition-transform duration-200 flex-shrink-0', isActive && 'scale-110')}
                  />
                  <span className="flex-1">{item.name}</span>
                </Link>
              )
            })}

            {/* BUTTONS - Mobile */}
            <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-border">
              {!isAuthenticated() ? (
                <>
                  {/* Request Demo */}
                  <Button
                    variant="outline" // Outline for mobile too
                    size="default"
                    className="justify-center w-full py-3 transition-colors hover:bg-primary hover:text-primary-foreground"
                    onClick={() => {
                      navigate('/register')
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Request Demo
                  </Button>

                  {/* Get Started */}
                  <Button
                    variant="default"
                    size="default"
                    className="justify-center w-full py-3 hover:bg-primary/90 hover:text-primary-foreground"
                    onClick={() => {
                      navigate('/register')
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Get Started
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="default"
                    size="default"
                    onClick={() => {
                      navigate('/dashboard')
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Dashboard
                  </Button>

                  <Button
                    variant="destructive"
                    size="default"
                    onClick={() => {
                      logout()
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Logout
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar