import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Kuaför</h3>
            <p className="mb-4">Profesyonel saç tasarımında yeni trendiniz</p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a 
                href="https://www.facebook.com/" 
                className="hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/" 
                className="hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.x.com/" 
                className="hover:text-pink-500"
                target='_blank'
                rel='noopener noreferrer'>
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <MapPin size={18} />
                <span>İstanbul</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone size={18} />
                <span>+90 555 555 5555</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail size={18} />
                <span>info@kuaför.com</span>
              </div>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-pink-500">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/randevu" className="hover:text-pink-500">Randevu Al</Link>
              </li>
              <li>
                <Link to="/giris" className="hover:text-pink-500">Giriş Yap</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Kuaför. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}