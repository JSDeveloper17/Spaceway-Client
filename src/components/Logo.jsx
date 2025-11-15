import React from 'react'

const Logo = ({ className = '', size = 'default' }) => {
  const sizes = {
    small: { textSize: 'text-2xl', spacing: 'space-x-1' },
    default: { textSize: 'text-3xl', spacing: 'space-x-2' },
    large: { textSize: 'text-5xl', spacing: 'space-x-3' },
  }

  const { textSize, spacing } = sizes[size] || sizes.default

  // Generate unique gradient ID to avoid conflicts
  const gradientId = `logoGradient-${size}`

  return (
    <div className={`flex items-center ${spacing} ${className} [filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.1))]`}>
      {/* Logo Icon */}
      <div className="relative">
        <svg 
          width={size === 'small' ? '32' : size === 'large' ? '48' : '40'} 
          height={size === 'small' ? '32' : size === 'large' ? '48' : '40'} 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 hover:scale-110"
        >
          {/* Background circle */}
          <circle cx="20" cy="20" r="18" fill={`url(#${gradientId})`} />
          
          {/* S letter design - stylized lightning/space theme */}
          <path 
            d="M20 8 L24 14 L20 14 L20 16 L28 16 L28 20 L20 20 L20 24 L28 24 L28 28 L20 28 L20 32 L16 26 L20 26 L20 24 L12 24 L12 20 L20 20 L20 16 L12 16 L12 12 L20 12 Z" 
            fill="white" 
            opacity="0.95"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Trajectory line with dots */}
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="absolute -top-1 -right-1"
        >
          <path 
            d="M4 12 Q8 6 16 8" 
            stroke="#60A5FA" 
            strokeWidth="2" 
            strokeLinecap="round" 
            fill="none"
            className="animate-pulse"
          />
          <circle cx="6" cy="10" r="2" fill="#60A5FA" />
          <circle cx="18" cy="8" r="2" fill="#60A5FA" />
        </svg>
      </div>

      {/* Logo Text */}
      <div className={`flex items-baseline ${textSize} font-bold`}>
        <span className="text-gray-700 dark:text-gray-300">SPACE</span>
        <span className="text-primary">
          WAY
          {/* Stylized W as arrow */}
          <svg 
            width={size === 'small' ? '24' : size === 'large' ? '36' : '28'} 
            height={size === 'small' ? '24' : size === 'large' ? '36' : '28'} 
            viewBox="0 0 28 28" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block ml-0.5"
          >
            <path 
              d="M0 20 L8 0 L14 14 L20 0 L28 20" 
              stroke="currentColor" 
              strokeWidth="3" 
              fill="none" 
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  )
}

export default Logo

