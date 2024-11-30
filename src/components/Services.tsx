import React from 'react';
import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16 tracking-wider">
          Our Creative Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ServiceCard 
            icon={PhotographyIcon()} 
            title="Photography"
            description="Capturing moments with an artistic eye, from portraits to landscapes."
          />
          <ServiceCard 
            icon={VideoProductionIcon()} 
            title="Video Production"
            description="Creating captivating videos, from concept to post-production."
          />
          <ServiceCard 
            icon={ContentStrategyIcon()} 
            title="Content Strategy"
            description="Strategizing compelling content that drives engagement and growth."
          />
        </div>
      </div>
    </section>
  );
}

// Custom SVG icons as functions
const PhotographyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 0v1m0 4v1m4 0h1M5 12h1m4 0v1m0 4v1m0-4H8m4 0h1" />
  </svg>
);

const VideoProductionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.632v6.736a1 1 0 01-1.447.908L15 14M4 6h7a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
  </svg>
);

const ContentStrategyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h0m-4-4h0m4 0h0m0-4h0m4 0h0M12 12h0m-4 4h0m8 0h0" />
  </svg>
);
