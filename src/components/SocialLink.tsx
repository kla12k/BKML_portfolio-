import React from 'react';

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

export function SocialLink({ icon, href }: SocialLinkProps) {
  return (
    <a 
      href={href}
      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
    >
      {icon}
    </a>
  );
}