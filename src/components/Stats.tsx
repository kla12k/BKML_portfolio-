import React from 'react';

export function Stats() {
  return (
    <section className="py-20 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
              {UsersIcon()}
            </div>
            <p className="text-4xl font-bold text-white mb-2">64K+</p>
            <p className="text-zinc-400">Combined Followers</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
              {TrophyIcon()}
            </div>
            <p className="text-4xl font-bold text-white mb-2">50+</p>
            <p className="text-zinc-400">Viral Campaigns</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
              {ZapIcon()}
            </div>
            <p className="text-4xl font-bold text-white mb-2">1M+</p>
            <p className="text-zinc-400">Combined Content Views</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Custom SVG Icons

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M7 20h10M7 20H2v-2a4 4 0 013-3.87M7 20a4 4 0 010-8h10a4 4 0 010 8zM12 4a4 4 0 110 8 4 4 0 010-8z" />
  </svg>
);

const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4m0-4a8 8 0 008-8V5a2 2 0 00-2-2H6a2 2 0 00-2 2v4a8 8 0 008 8z" />
  </svg>
);

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
