import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import StoreContextProvider from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
   <App />
  </StoreContextProvider>
  </BrowserRouter>,
)
