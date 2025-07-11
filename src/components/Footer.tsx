import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-medium-gray mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-gold mb-4">Patisserie Belle Tarte</h3>
            <p className="text-gray-400 text-sm">
              手作りにこだわった、本格的なフランス菓子をお届けします。
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">クイックリンク</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  メニュー
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  お店について
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  店舗情報
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">営業時間</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>月曜日: 定休日</li>
              <li>火曜日 - 金曜日: 10:00 - 19:00</li>
              <li>土曜日 - 日曜日: 10:00 - 18:00</li>
              <li>祝日: 10:00 - 18:00</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gold mt-0.5" />
                <span className="text-gray-400">
                  〒150-0001<br />
                  東京都渋谷区神宮前4-12-10
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-gray-400">03-1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-gray-400">info@belletarte.jp</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Patisserie Belle Tarte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;