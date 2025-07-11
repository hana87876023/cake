import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Car, Train, Mail } from 'lucide-react';

const StoreInfoPage = () => {
  const businessHours = [
    { day: '月曜日', hours: '定休日', closed: true },
    { day: '火曜日', hours: '10:00 - 19:00' },
    { day: '水曜日', hours: '10:00 - 19:00' },
    { day: '木曜日', hours: '10:00 - 19:00' },
    { day: '金曜日', hours: '10:00 - 19:00' },
    { day: '土曜日', hours: '10:00 - 18:00' },
    { day: '日曜日', hours: '10:00 - 18:00' },
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden mb-12">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark-gray/60 to-dark-gray/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            店舗情報
          </h1>
          <p className="text-xl text-gray-300">
            アクセス・営業時間のご案内
          </p>
        </motion.div>
      </section>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Store Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-8 text-gold">
              Patisserie Belle Tarte
            </h2>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-1" />
                <div>
                  <p className="font-semibold mb-1">住所</p>
                  <p className="text-gray-400">
                    〒150-0001<br />
                    東京都渋谷区神宮前4-12-10<br />
                    表参道ヒルズ近く
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gold mt-1" />
                <div>
                  <p className="font-semibold mb-1">電話番号</p>
                  <p className="text-gray-400">03-1234-5678</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gold mt-1" />
                <div>
                  <p className="font-semibold mb-1">メール</p>
                  <p className="text-gray-400">info@belletarte.jp</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="h-5 w-5 text-gold mr-2" />
                営業時間
              </h3>
              <div className="bg-medium-gray rounded-lg p-6">
                {businessHours.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between py-2 ${
                      index !== businessHours.length - 1 ? 'border-b border-gray-700' : ''
                    }`}
                  >
                    <span className={item.closed ? 'text-gray-500' : ''}>
                      {item.day}
                    </span>
                    <span className={item.closed ? 'text-red-400' : 'text-gold'}>
                      {item.hours}
                    </span>
                  </div>
                ))}
                <p className="text-sm text-gray-400 mt-4">
                  ※祝日は10:00-18:00で営業しております
                </p>
              </div>
            </div>

            {/* Access */}
            <div>
              <h3 className="text-xl font-semibold mb-4">アクセス</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Train className="h-5 w-5 text-gold mt-1" />
                  <div>
                    <p className="font-medium">電車でお越しの方</p>
                    <p className="text-gray-400 text-sm">
                      JR山手線「原宿駅」表参道口より徒歩8分<br />
                      東京メトロ銀座線・半蔵門線・千代田線「表参道駅」A2出口より徒歩5分
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Car className="h-5 w-5 text-gold mt-1" />
                  <div>
                    <p className="font-medium">お車でお越しの方</p>
                    <p className="text-gray-400 text-sm">
                      近隣のコインパーキングをご利用ください。<br />
                      ※専用駐車場はございません
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full min-h-[500px]"
          >
            <div className="bg-medium-gray rounded-lg h-full relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3871419920767!2d139.71169881525883!3d35.66747398019663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca428df3dbf%3A0x3c45f55f3e3f3e3f!2z6KGo5Y-C6YGT44OS44Or44K6!5e0!3m2!1sja!2sjp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80"
              />
              <div className="absolute bottom-4 right-4 bg-dark-gray/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                <a
                  href="https://goo.gl/maps/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-dark-gold transition-colors text-sm"
                >
                  Google Mapsで開く →
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Store Images */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">
            店内の様子
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80"
                alt="店内の様子1"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&q=80"
                alt="店内の様子2"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=600&q=80"
                alt="店内の様子3"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default StoreInfoPage;