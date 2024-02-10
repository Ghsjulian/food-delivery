import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider} from "./context/useCart"
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>,
)
