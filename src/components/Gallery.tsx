import React from 'react';

const galleryImages = [
  'https://iavogue.tmgrup.com.tr/original/22-04/25/hungvanngo_277114400_373911658076759_3107063649180462360_n.jpg',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80',
  'https://galatano5beauty.com/wp-content/uploads/2022/08/sac-kesim-fiyatlari.jpg',
];

export function Gallery() {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Çalışmalarımız</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={image}
                alt={`Saç modeli ${index + 1}`}
                className="w-full h-48 md:h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}