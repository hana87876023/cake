import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ShoppingBag, Heart, Share2, Minus, Plus, Check, ExternalLink } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  
  const { addToCart } = useCart();
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-400">商品が見つかりません</p>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="py-8">
      <div className="container-custom">
        <Link
          to="/menu"
          className="inline-flex items-center text-gray-400 hover:text-gold transition-colors mb-8"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          メニューに戻る
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden mb-4">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative h-24 rounded-md overflow-hidden ${
                    activeImage === index ? 'ring-2 ring-gold' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4 flex items-center gap-3">
              {product.name}
              {isFavorite(product.id) && (
                <Heart className="h-8 w-8 text-red-500 fill-red-500" />
              )}
            </h1>
            <p className="text-gray-400 mb-6">{product.description}</p>

            {/* Price and Size */}
            <div className="mb-6">
              <p className="text-3xl font-bold text-gold mb-4">
                ¥{product.sizes?.[selectedSize].price.toLocaleString() || product.price.toLocaleString()}
              </p>
              
              {product.sizes && (
                <div>
                  <p className="text-sm font-medium mb-2">サイズ:</p>
                  <div className="flex gap-2">
                    {product.sizes.map((size, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSize(index)}
                        className={`px-4 py-2 rounded-md border-2 transition-all duration-300 ${
                          selectedSize === index
                            ? 'border-gold bg-gold text-dark-gray'
                            : 'border-gray-600 hover:border-gold'
                        }`}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">数量:</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-md bg-medium-gray hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-md bg-medium-gray hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => {
                  const size = product.sizes?.[selectedSize].name;
                  addToCart(product, quantity, size);
                  setShowAddedMessage(true);
                  setTimeout(() => setShowAddedMessage(false), 2000);
                }}
                className="flex-1 btn-primary flex items-center justify-center gap-2"
              >
                {showAddedMessage ? (
                  <>
                    <Check className="h-5 w-5" />
                    カートに追加しました
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-5 w-5" />
                    カートに追加
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  if (isFavorite(product.id)) {
                    removeFromFavorites(product.id);
                  } else {
                    addToFavorites(product.id);
                  }
                }}
                className={`p-3 rounded-lg transition-colors ${
                  isFavorite(product.id)
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-light-gray hover:bg-gray-200'
                }`}
              >
                <Heart className={`h-5 w-5 ${isFavorite(product.id) ? 'fill-white' : ''}`} />
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="p-3 bg-light-gray hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <Share2 className="h-5 w-5" />
                </button>
                {showShareMenu && (
                  <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg p-4 w-64 z-10">
                    <h4 className="font-semibold mb-3">共有する</h4>
                    <div className="space-y-2">
                      <a
                        href={`https://line.me/R/share?text=${encodeURIComponent(
                          `${product.name} - Patisserie Belle Tarte\n${window.location.href}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 hover:bg-light-gray rounded transition-colors"
                      >
                        <span className="text-green-500 font-bold">LINE</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          `${product.name} - Patisserie Belle Tarte`
                        )}&url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 hover:bg-light-gray rounded transition-colors"
                      >
                        <span className="text-blue-400 font-bold">Twitter</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 hover:bg-light-gray rounded transition-colors"
                      >
                        <span className="text-blue-600 font-bold">Facebook</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          alert('リンクをコピーしました！');
                        }}
                        className="flex items-center gap-3 p-2 hover:bg-light-gray rounded transition-colors w-full text-left"
                      >
                        <span className="font-bold">リンクをコピー</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4 border-t border-gray-700 pt-6">
              <div>
                <h3 className="font-semibold mb-2">材料</h3>
                <p className="text-gray-400">{product.ingredients.join('、')}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">アレルギー情報</h3>
                <div className="flex gap-2">
                  {product.allergens.map((allergen) => (
                    <span
                      key={allergen}
                      className="px-3 py-1 bg-red-900/30 text-red-400 rounded-md text-sm"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>

              {product.nutritionInfo && (
                <div>
                  <h3 className="font-semibold mb-2">栄養成分（1切れあたり）</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                    <p>カロリー: {product.nutritionInfo.calories}kcal</p>
                    <p>脂質: {product.nutritionInfo.fat}g</p>
                    <p>糖質: {product.nutritionInfo.sugar}g</p>
                    <p>タンパク質: {product.nutritionInfo.protein}g</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-serif font-bold mb-8">関連商品</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-gold transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-gold font-bold">
                    ¥{relatedProduct.price.toLocaleString()}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;