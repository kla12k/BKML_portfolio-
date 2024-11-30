import React from 'react';

interface WorkCardProps {
  image: string;
  title: string;
  category: string;
}

export function WorkCard({ image, title, category }: WorkCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <img 
        src={image} 
        alt={title}
        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-sm text-zinc-400 mb-2">{category}</p>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
}