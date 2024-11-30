import React from 'react';
import { Logo } from './layout/Logo';
import { SocialLinks } from './layout/SocialLinks';
import { Copyright } from './layout/Copyright';

export function Footer() {
  return (
    <footer className="py-3 bg-zinc-950">
      <div className="container mx-auto px-1">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo />
          {/* <SocialLinks /> */}
          <Copyright />
        </div>
      </div>
    </footer>
  );
}