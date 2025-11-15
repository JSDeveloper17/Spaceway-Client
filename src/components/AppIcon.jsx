// import React from 'react'
// import * as LucideIcons from 'lucide-react'

// // Map common icon names to Lucide React icons
// const iconMap = {
//   // Common icons
//   home: LucideIcons.Home,
//   user: LucideIcons.User,
//   settings: LucideIcons.Settings,
//   search: LucideIcons.Search,
//   mail: LucideIcons.Mail,
//   heart: LucideIcons.Heart,
//   star: LucideIcons.Star,
//   share: LucideIcons.Share2,
//   download: LucideIcons.Download,
//   upload: LucideIcons.Upload,
//   edit: LucideIcons.Edit,
//   delete: LucideIcons.Trash2,
//   save: LucideIcons.Save,
//   plus: LucideIcons.Plus,
//   minus: LucideIcons.Minus,
//   check: LucideIcons.Check,
//   x: LucideIcons.X,
//   arrowLeft: LucideIcons.ArrowLeft,
//   arrowRight: LucideIcons.ArrowRight,
//   arrowUp: LucideIcons.ArrowUp,
//   arrowDown: LucideIcons.ArrowDown,
//   chevronLeft: LucideIcons.ChevronLeft,
//   chevronRight: LucideIcons.ChevronRight,
//   menu: LucideIcons.Menu,
//   close: LucideIcons.X,
//   bell: LucideIcons.Bell,
//   lock: LucideIcons.Lock,
//   unlock: LucideIcons.Unlock,
//   eye: LucideIcons.Eye,
//   eyeOff: LucideIcons.EyeOff,
//   calendar: LucideIcons.Calendar,
//   clock: LucideIcons.Clock,
//   phone: LucideIcons.Phone,
//   globe: LucideIcons.Globe,
//   image: LucideIcons.Image,
//   file: LucideIcons.File,
//   folder: LucideIcons.Folder,
//   link: LucideIcons.Link,
//   externalLink: LucideIcons.ExternalLink,
//   copy: LucideIcons.Copy,
//   moreHorizontal: LucideIcons.MoreHorizontal,
//   moreVertical: LucideIcons.MoreVertical,
//   filter: LucideIcons.Filter,
//   refresh: LucideIcons.RefreshCw,
//   info: LucideIcons.Info,
//   alertCircle: LucideIcons.AlertCircle,
//   checkCircle: LucideIcons.CheckCircle,
//   xCircle: LucideIcons.XCircle,
//   alertTriangle: LucideIcons.AlertTriangle,
//   help: LucideIcons.HelpCircle,
//   loading: LucideIcons.Loader2,
//   logout: LucideIcons.LogOut,
//   login: LucideIcons.LogIn,
//   sun: LucideIcons.Sun,
//   moon: LucideIcons.Moon,
//   playCircle: LucideIcons.PlayCircle,
//   rocket: LucideIcons.Rocket,
//   shield: LucideIcons.Shield,
//   trendingUp: LucideIcons.TrendingUp,
//   chevronDown: LucideIcons.ChevronDown,
//   play: LucideIcons.Play,
//   users: LucideIcons.Users,
//   package: LucideIcons.Package,
//   zap: LucideIcons.Zap,
//   barChart3: LucideIcons.BarChart3,
//   star: LucideIcons.Star,
//   calculator: LucideIcons.Calculator,
//   target: LucideIcons.Target,
//   messageSquare: LucideIcons.MessageSquare,
//   building: LucideIcons.Building,
//   pause: LucideIcons.Pause,
//   award: LucideIcons.Award,
// }

// const AppIcon = ({ name, size = 16, className = '', ...props }) => {
//   // Try to get icon from our mapped icons first
//   const IconComponent = iconMap[name]

//   // If not found in our map, try to get it directly from Lucide Icons
//   const LucideIcon = IconComponent || LucideIcons[capitalizeFirst(name)] || LucideIcons[name]

//   if (!LucideIcon) {
//     console.warn(`Icon "${name}" not found`)
//     return null
//   }

//   return <LucideIcon size={size} className={className} {...props} />
// }

// // Helper function to capitalize first letter
// function capitalizeFirst(str) {
//   if (!str) return ''
//   return str.charAt(0).toUpperCase() + str.slice(1)
// }

// export default AppIcon

import React from 'react'
import * as LucideIcons from 'lucide-react'

// Map common icon names to Lucide React icons
const iconMap = {
  // Common icons
  home: LucideIcons.Home,
  user: LucideIcons.User,
  settings: LucideIcons.Settings,
  search: LucideIcons.Search,
  mail: LucideIcons.Mail,
  heart: LucideIcons.Heart,
  star: LucideIcons.Star,
  share: LucideIcons.Share2,
  download: LucideIcons.Download,
  upload: LucideIcons.Upload,
  edit: LucideIcons.Edit,
  delete: LucideIcons.Trash2,
  save: LucideIcons.Save,
  plus: LucideIcons.Plus,
  minus: LucideIcons.Minus,
  check: LucideIcons.Check,
  x: LucideIcons.X,
  arrowLeft: LucideIcons.ArrowLeft,
  arrowRight: LucideIcons.ArrowRight,
  arrowUp: LucideIcons.ArrowUp,
  arrowDown: LucideIcons.ArrowDown,
  chevronLeft: LucideIcons.ChevronLeft,
  chevronRight: LucideIcons.ChevronRight,
  menu: LucideIcons.Menu,
  close: LucideIcons.X,
  bell: LucideIcons.Bell,
  lock: LucideIcons.Lock,
  unlock: LucideIcons.Unlock,
  eye: LucideIcons.Eye,
  eyeOff: LucideIcons.EyeOff,
  calendar: LucideIcons.Calendar,
  clock: LucideIcons.Clock,
  phone: LucideIcons.Phone,
  globe: LucideIcons.Globe,
  image: LucideIcons.Image,
  file: LucideIcons.File,
  folder: LucideIcons.Folder,
  link: LucideIcons.Link,
  externalLink: LucideIcons.ExternalLink,
  copy: LucideIcons.Copy,
  moreHorizontal: LucideIcons.MoreHorizontal,
  moreVertical: LucideIcons.MoreVertical,
  filter: LucideIcons.Filter,
  refresh: LucideIcons.RefreshCw,
  info: LucideIcons.Info,
  alertCircle: LucideIcons.AlertCircle,
  checkCircle: LucideIcons.CheckCircle,
  xCircle: LucideIcons.XCircle,
  alertTriangle: LucideIcons.AlertTriangle,
  help: LucideIcons.HelpCircle,
  loading: LucideIcons.Loader2,
  logout: LucideIcons.LogOut,
  login: LucideIcons.LogIn,
  sun: LucideIcons.Sun,
  moon: LucideIcons.Moon,
  playCircle: LucideIcons.PlayCircle,
  rocket: LucideIcons.Rocket,
  shield: LucideIcons.Shield,
  trendingUp: LucideIcons.TrendingUp,
  chevronDown: LucideIcons.ChevronDown,
  play: LucideIcons.Play,
  users: LucideIcons.Users,
  package: LucideIcons.Package,
  zap: LucideIcons.Zap,
  barChart3: LucideIcons.BarChart3,
  calculator: LucideIcons.Calculator,
  target: LucideIcons.Target,
  messageSquare: LucideIcons.MessageSquare,
  building: LucideIcons.Building,
  pause: LucideIcons.Pause,
  award: LucideIcons.Award,
}

const AppIcon = ({ name, size = 16, className = '', ...props }) => {
  // Try to get icon from our mapped icons first
  const IconComponent = iconMap[name]

  // If not found in our map, try to get it directly from Lucide Icons
  const LucideIcon =
    IconComponent || LucideIcons[capitalizeFirst(name)] || LucideIcons[name]

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <LucideIcon size={size} className={className} {...props} />
}

// Helper function to capitalize first letter
function capitalizeFirst(str) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default AppIcon
