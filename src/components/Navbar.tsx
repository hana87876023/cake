import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();
  const { items } = useCart();

  const navigation = [
    { name: 'ホーム', href: '/' },
    { name: 'メニュー', href: '/menu' },
    { name: 'お店について', href: '/about' },
    { name: '店舗情報', href: '/store' },
    { name: 'お問い合わせ', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-medium-gray shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-primary">Patisserie</span>
            <span className="text-2xl font-serif font-light text-text-gray">Belle Tarte</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-text-gray hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={() => setShowCart(!showCart)}
              className="relative p-2 hover:text-primary transition-colors">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                {items.length}
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:text-primary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-light-gray"
          >
            <div className="container-custom py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-primary'
                      : 'text-text-gray hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-20 bg-white shadow-xl rounded-l-lg p-6 w-80 max-h-96 overflow-y-auto z-40"
          >
            <h3 className="text-lg font-semibold mb-4">カート内の商品</h3>
            {items.length === 0 ? (
              <p className="text-gray-500">カートは空です</p>
            ) : (
              <div className="space-y-3">
                {items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-light-gray rounded">
                    <div>
                      <p className="font-medium">{item.product.name}</p>
                      <p className="text-sm text-gray-600">
                        {item.size && `サイズ: ${item.size} • `}
                        数量: {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold">
                      ¥{((item.size && item.product.sizes?.find(s => s.name === item.size)?.price) || item.product.price) * item.quantity}
                    </p>
                  </div>
                ))}
                <div className="border-t pt-3">
                  <p className="text-lg font-bold">
                    合計: ¥{items.reduce((total, item) => {
                      const price = (item.size && item.product.sizes?.find(s => s.name === item.size)?.price) || item.product.price;
                      return total + price * item.quantity;
                    }, 0).toLocaleString()}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;