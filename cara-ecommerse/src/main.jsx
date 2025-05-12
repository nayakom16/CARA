import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductContextProvider } from './context/ProductContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </BrowserRouter>
  </StrictMode>
)
