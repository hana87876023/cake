import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const faqs = [
    {
      question: '注文はどのくらい前にすればよいですか？',
      answer: '通常のご注文は3日前までにお願いいたします。特別なオーダーメイドの場合は、1週間前までにご相談ください。',
    },
    {
      question: 'アレルギー対応は可能ですか？',
      answer: 'はい、可能な限り対応させていただきます。ご注文時にアレルギー情報をお知らせください。',
    },
    {
      question: '配送は行っていますか？',
      answer: '申し訳ございませんが、現在は店頭受け取りのみとなっております。',
    },
    {
      question: '支払い方法は何がありますか？',
      answer: '現金、クレジットカード、電子マネー、QRコード決済に対応しております。',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'お名前を入力してください';
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }
    if (!formData.subject) newErrors.subject = 'お問い合わせ種別を選択してください';
    if (!formData.message.trim()) newErrors.message = 'メッセージを入力してください';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden mb-12">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80')`,
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
            お問い合わせ
          </h1>
          <p className="text-xl text-gray-300">
            ご質問・ご相談はお気軽にどうぞ
          </p>
        </motion.div>
      </section>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-serif font-bold mb-8">お問い合わせフォーム</h2>
            
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-900/30 border border-green-500 text-green-400 px-4 py-3 rounded-lg mb-6"
              >
                お問い合わせありがとうございます。内容を確認次第、ご連絡させていただきます。
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    お名前 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-medium-gray border ${
                      errors.name ? 'border-red-500' : 'border-gray-600'
                    } rounded-lg px-4 py-3 focus:border-gold focus:outline-none transition-colors`}
                    placeholder="山田 太郎"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-medium-gray border border-gray-600 rounded-lg px-4 py-3 focus:border-gold focus:outline-none transition-colors"
                    placeholder="090-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-medium-gray border ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg px-4 py-3 focus:border-gold focus:outline-none transition-colors`}
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  お問い合わせ種別 <span className="text-red-400">*</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-medium-gray border ${
                    errors.subject ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg px-4 py-3 focus:border-gold focus:outline-none transition-colors`}
                >
                  <option value="">選択してください</option>
                  <option value="order">ご注文について</option>
                  <option value="product">商品について</option>
                  <option value="store">店舗について</option>
                  <option value="other">その他</option>
                </select>
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  メッセージ <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full bg-medium-gray border ${
                    errors.message ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg px-4 py-3 focus:border-gold focus:outline-none transition-colors`}
                  placeholder="お問い合わせ内容をご記入ください"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>送信中...</span>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    送信する
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Info */}
            <div className="bg-medium-gray rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-6">お問い合わせ先</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-gold mt-1" />
                  <div>
                    <p className="font-medium">電話</p>
                    <p className="text-gray-400">03-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-gold mt-1" />
                  <div>
                    <p className="font-medium">メール</p>
                    <p className="text-gray-400">info@belletarte.jp</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gold mt-1" />
                  <div>
                    <p className="font-medium">住所</p>
                    <p className="text-gray-400">
                      〒150-0001<br />
                      東京都渋谷区神宮前4-12-10
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-gold mt-1" />
                  <div>
                    <p className="font-medium">営業時間</p>
                    <p className="text-gray-400">
                      火-金: 10:00-19:00<br />
                      土日祝: 10:00-18:00<br />
                      定休日: 月曜日
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-xl font-semibold mb-6">よくあるご質問</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-700 pb-4"
                  >
                    <h4 className="font-medium mb-2">{faq.question}</h4>
                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;