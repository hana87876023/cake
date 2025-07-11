import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: '田中 美咲',
    rating: 5,
    comment: '友人の誕生日にフルーツタルトを注文しました。見た目も美しく、味も最高でした。フルーツの新鮮さとカスタードクリームのバランスが絶妙です。',
    date: '2024年1月',
  },
  {
    id: 2,
    name: '佐藤 健太',
    rating: 5,
    comment: 'チョコレートタルトは本当に濃厚で美味しい！甘すぎず、大人の味わいです。妻も大満足でした。',
    date: '2024年1月',
  },
  {
    id: 3,
    name: '鈴木 陽子',
    rating: 5,
    comment: '抹茶タルトを初めて食べましたが、和と洋の融合が素晴らしい。お店の雰囲気も素敵で、また来たいです。',
    date: '2023年12月',
  },
  {
    id: 4,
    name: '山田 太郎',
    rating: 5,
    comment: '記念日に利用させていただきました。特別なリクエストにも丁寧に対応してくださり、感謝しています。',
    date: '2023年12月',
  },
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-dark-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            お客様の声
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Belle Tarteをご利用いただいたお客様からの嬉しいお声
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-medium-gray rounded-lg p-8 md:p-12">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < reviews[currentIndex].rating
                        ? 'text-gold fill-gold'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-lg text-gray-300 text-center mb-6 italic">
                "{reviews[currentIndex].comment}"
              </p>
              
              <div className="text-center">
                <p className="font-semibold">{reviews[currentIndex].name}</p>
                <p className="text-sm text-gray-400">{reviews[currentIndex].date}</p>
              </div>
            </motion.div>
          </div>

          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-gold/20 hover:bg-gold/30 backdrop-blur-sm p-2 rounded-full transition-colors duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-gold" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-gold/20 hover:bg-gold/30 backdrop-blur-sm p-2 rounded-full transition-colors duration-300"
          >
            <ChevronRight className="h-6 w-6 text-gold" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gold w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;