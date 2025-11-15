import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>

        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
)




