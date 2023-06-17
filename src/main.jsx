import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/Theme/theme.js'
import { BrowserRouter } from 'react-router-dom'
import { persistor, store } from '../src/redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.light}>
    <BrowserRouter basename="/YourPet" >
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
      </Provider>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
