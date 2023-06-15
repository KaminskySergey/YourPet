import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/Theme/theme.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.light}>
    <BrowserRouter basename="/" >
    <App />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
