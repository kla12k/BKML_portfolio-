import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { SocialLink } from './SocialLink';

export function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/90 to-zinc-900/90 z-10" />
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://player.vimeo.com/external/449623669.sd.mp4?s=ce5db2ff6e8d6456952725c478be6ca4c5ace4e2&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
      </video>
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            We Create<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
              Digital Magic
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-2xl">
            A collective of creative minds crafting viral content across social media platforms.
            We turn ideas into trending sensations.
          </p>
         

        </div>
      </div>
    </header>
  );
}