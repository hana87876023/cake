import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Info } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          >
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-sm text-white mb-2">{product.shortDescription}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {product.allergens.map((allergen) => (
                  <span
                    key={allergen}
                    className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded"
                  >
                    {allergen}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  注文する
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-md transition-colors duration-300">
                  <Info className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              ¥{product.price.toLocaleString()}
            </span>
            {product.sizes && (
              <span className="text-sm text-gray-600">
                {product.sizes[0].name}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;