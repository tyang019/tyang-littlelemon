import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './app/App.jsx'
import { CartProvider } from './features/cart/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
)

