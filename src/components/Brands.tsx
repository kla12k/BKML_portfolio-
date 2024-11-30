import React from 'react';

export function Brands() {
  const brands = [
    'Netflix', 'Spotify', 'Amazon', 'Meta', 'Google', 'Apple'
  ];

  return (
    <section className="py-12 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <p className="text-center text-zinc-500 mb-8">Trusted by world-class brands</p>
        <div className="flex flex-wrap justify-center gap-12 items-center">
          {brands.map((brand) => (
            <span key={brand} className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-300">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}