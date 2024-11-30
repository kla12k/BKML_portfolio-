import React from 'react';

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="relative group bg-zinc-800 p-8 rounded-lg shadow-lg hover:bg-gradient-to-b from-violet-500 to-purple-600 transition-colors duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex justify-center mb-6">
        <div className="bg-zinc-700 p-4 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white text-center mb-4 transition-colors duration-300 group-hover:text-zinc-100">
        {title}
      </h3>
      <p className="text-zinc-400 text-center transition-colors duration-300 group-hover:text-zinc-200">
        {description}
      </p>
      <div className="absolute inset-0 rounded-lg ring-2 ring-transparent group-hover:ring-white transition-all duration-300"></div>
    </div>
  );
}
