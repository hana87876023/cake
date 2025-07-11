import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductShowcase from '../components/ProductShowcase';
import ShopFeatures from '../components/ShopFeatures';
import CustomerReviews from '../components/CustomerReviews';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486427944299-aa1a5e0def7d?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark-gray/70 to-dark-gray/90" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
              <span className="text-gold">Patisserie</span>{' '}
              <span className="text-white">Belle Tarte</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              手作りの温もりと、本格フランス菓子の融合
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu" className="btn-primary inline-flex items-center">
                商品を見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/about" className="btn-secondary">
                お店について
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Product Showcase Section */}
      <ProductShowcase />

      {/* Shop Features Section */}
      <ShopFeatures />

      {/* Customer Reviews Section */}
      <CustomerReviews />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold/10 to-gold/5">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              特別な日のタルトをお探しですか？
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              お誕生日、記念日、パーティーなど、特別な日のためのオーダーメイドタルトも承っております。
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              お問い合わせはこちら
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;