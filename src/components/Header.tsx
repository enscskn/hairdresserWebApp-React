import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Menu, X } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Header() {
  const { user } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Scissors className="h-6 w-6 text-pink-600" />
            <span className="text-xl font-bold">İbrahim Yalman</span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-pink-600">
              Ana Sayfa
            </Link>
            <Link to="/randevu" className="text-gray-600 hover:text-pink-600">
              Randevu Al
            </Link>
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link to="/dashboard" className="text-gray-600 hover:text-pink-600">
                    Admin Panel
                  </Link>
                )}
                <span className="text-gray-600">Merhaba, {user.name}</span>
              </>
            ) : (
              <Link
                to="/giris"
                className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700"
              >
                Giriş Yap
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              to="/"
              className="block text-gray-600 hover:text-pink-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link
              to="/randevu"
              className="block text-gray-600 hover:text-pink-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Randevu Al
            </Link>
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link
                    to="/dashboard"
                    className="block text-gray-600 hover:text-pink-600 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin Panel
                  </Link>
                )}
                <span className="block text-gray-600 py-2">Merhaba, {user.name}</span>
              </>
            ) : (
              <Link
                to="/giris"
                className="block bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Giriş Yap
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}