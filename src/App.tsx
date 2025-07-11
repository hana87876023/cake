import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import StoreInfoPage from './pages/StoreInfoPage';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';
import { CartProvider } from './contexts/CartContext';
import { FavoritesProvider } from './contexts/FavoritesContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <FavoritesProvider>
          <div className="min-h-screen bg-white text-text-gray flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/store" element={<StoreInfoPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </FavoritesProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
