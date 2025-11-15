import React, { useState } from 'react'
import { cn } from '../utils/cn'

const AppImage = ({ src, alt, className, ...props }) => {
  const [error, setError] = useState(false)

  // Fallback to a placeholder if image fails to load
  const handleError = () => {
    setError(true)
  }

  if (error) {
    return (
      <div className={cn("bg-muted flex items-center justify-center", className)} {...props}>
        <span className="text-muted-foreground text-xs">Image</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt || ''}
      className={className}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  )
}

export default AppImage

