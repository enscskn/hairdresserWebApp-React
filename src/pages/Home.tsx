import React from 'react';
import { Scissors, Clock, Star, Phone } from 'lucide-react';
import { Gallery } from '../components/Gallery';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1920&q=80"
          alt="Kuaför salonu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">İbrahim Yalman</h1>
            <p className="text-lg md:text-xl mb-8">Profesyonel saç tasarımında yeni trendiniz!</p>
            <Link
              to="/randevu"
              className="bg-pink-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-pink-700 transition-colors inline-block"
            >
              Hemen Randevu Al
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Scissors className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Uzman Ekip</h3>
              <p className="text-gray-600">Deneyimli ve profesyonel ekibimizle hizmetinizdeyiz</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Esnek Saatler</h3>
              <p className="text-gray-600">Size uygun zamanda randevu alabilirsiniz</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Kaliteli Hizmet</h3>
              <p className="text-gray-600">En iyi ürünler ve en son trendler</p>
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      {/* Contact */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Bize Ulaşın</h2>
              <p className="text-gray-600 mb-4">
                Sorularınız için bize ulaşabilir veya randevu alabilirsiniz.
              </p>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-pink-600" />
                <span className="text-lg">+90 533 038 1417</span>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                alt="Salon interior"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}