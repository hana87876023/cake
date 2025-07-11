import { motion } from 'framer-motion';
import { ChefHat, Wheat, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: ChefHat,
    title: '職人の技術',
    description: 'フランスで修行を積んだパティシエが、一つ一つ丁寧に手作りしています。',
  },
  {
    icon: Wheat,
    title: '厳選された素材',
    description: '国産の新鮮な素材と、本場フランスから取り寄せた材料を使用。',
  },
  {
    icon: Award,
    title: '受賞歴',
    description: '国内外のコンクールで数々の賞を受賞した、確かな技術と味。',
  },
  {
    icon: Heart,
    title: '心を込めて',
    description: 'お客様の笑顔を思い浮かべながら、愛情を込めて作っています。',
  },
];

const ShopFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-light-gray to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            私たちのこだわり
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Belle Tarteが大切にしている4つの約束
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="h-10 w-10 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopFeatures;