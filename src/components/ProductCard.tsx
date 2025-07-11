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
      className="group relative overflow-hidden rounded-lg bg-medium-gray"
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
            className="absolute inset-0 bg-gradient-to-t from-dark-gray/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          >
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-sm text-gray-300 mb-2">{product.shortDescription}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {product.allergens.map((allergen) => (
                  <span
                    key={allergen}
                    className="text-xs bg-gold/20 text-gold px-2 py-1 rounded"
                  >
                    {allergen}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-gold hover:bg-dark-gold text-dark-gray font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center gap-2">
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
          <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-gold transition-colors duration-300">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gold">
              ¥{product.price.toLocaleString()}
            </span>
            {product.sizes && (
              <span className="text-sm text-gray-400">
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