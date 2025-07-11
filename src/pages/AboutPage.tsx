import { motion } from 'framer-motion';
import { Award, Users, Calendar, Globe } from 'lucide-react';

const AboutPage = () => {
  const milestones = [
    { year: '2010', event: 'Belle Tarteオープン' },
    { year: '2012', event: '東京スイーツコンクール金賞受賞' },
    { year: '2015', event: '2号店オープン' },
    { year: '2018', event: 'フランス研修プログラム開始' },
    { year: '2021', event: 'オンラインショップ開設' },
    { year: '2023', event: '創業13周年記念' },
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mb-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80')`,
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
            私たちについて
          </h1>
          <p className="text-xl text-gray-300">
            Belle Tarteの物語とこだわり
          </p>
        </motion.div>
      </section>

      <div className="container-custom">
        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-gold">
                Belle Tarteの始まり
              </h2>
              <p className="text-gray-300 mb-4">
                2010年、フランスでの修行を終えた私たちは、本場の味と技術を日本の皆様にお届けしたいという想いから、Belle Tarteをオープンしました。
              </p>
              <p className="text-gray-300 mb-4">
                「Belle」はフランス語で「美しい」を意味し、見た目も味も美しいタルトを作りたいという願いが込められています。
              </p>
              <p className="text-gray-300">
                開店以来、地域の皆様に愛され、今では遠方からもお客様が訪れる人気店に成長しました。これもひとえに、お客様の温かいご支援のおかげです。
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486427944299-aa1a5e0def7d?w=800&q=80"
                alt="Our bakery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Chef Profile */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">
            シェフ紹介
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80"
                  alt="Chef Yamada"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">山田 太郎</h3>
              <p className="text-gold mb-4">オーナーシェフ</p>
              <p className="text-gray-400 text-sm max-w-sm mx-auto">
                パリの名門パティスリーで5年間修行。伝統的なフランス菓子に日本の季節感を取り入れた独自のスタイルを確立。
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&q=80"
                  alt="Chef Suzuki"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">鈴木 花子</h3>
              <p className="text-gold mb-4">パティシエ</p>
              <p className="text-gray-400 text-sm max-w-sm mx-auto">
                東京製菓学校卒業後、国内外で研鑽を積む。繊細な技術と斬新なアイデアで、新しいタルトの可能性を追求。
              </p>
            </div>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">
            私たちの価値観
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">品質へのこだわり</h3>
              <p className="text-gray-400 text-sm">
                最高級の材料と確かな技術で、妥協のない品質を追求
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">お客様第一</h3>
              <p className="text-gray-400 text-sm">
                お客様の笑顔と満足が私たちの最大の喜び
              </p>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">伝統と革新</h3>
              <p className="text-gray-400 text-sm">
                フランスの伝統を守りながら、新しい味への挑戦
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">地域貢献</h3>
              <p className="text-gray-400 text-sm">
                地元の食材を活用し、地域社会に貢献
              </p>
            </div>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">
            Belle Tarteの歩み
          </h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center mb-8"
              >
                <div className="w-24 text-right pr-8">
                  <span className="text-gold font-bold">{milestone.year}</span>
                </div>
                <div className="w-4 h-4 bg-gold rounded-full relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gold/20 rounded-full animate-ping" />
                </div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-300">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;