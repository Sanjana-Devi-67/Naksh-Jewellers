import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage"; 
import { CartProvider } from "./context/CartContext";
import "./styles/global.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        {/* ⭐ IMPORTANT WRAPPER */}
        <div className="app-wrapper">

          <Navbar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>

          {/* Footer must be INSIDE wrapper */}
          <footer className="footer">

            <div className="footer-section">
              <h4>Naksh Gold</h4>
              <p>Luxury handcrafted gold jewellery.</p>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <p>📍 123 Royal Street, India</p>
              <p>📞 +91 98765 43210</p>
            </div>

            <div className="footer-section">
              <h4>Follow Us</h4>
              <p>Instagram | Facebook | Pinterest</p>
            </div>

          </footer>

        </div>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
