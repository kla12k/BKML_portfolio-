import React from 'react';

const socialLinks = [
  { 
    svg: (
      <svg 
        className="w-6 h-6" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 0 12.63 16 4 4 0 0 0 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    href: '#',
    hoverColor: 'hover:text-pink-400',
    label: 'Instagram'
  },
  { 
    svg: (
      <svg 
        className="w-6 h-6" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-4.15 1.83-5.79 2.22a4.48 4.48 0 0 0-7.86 4.08A12.94 12.94 0 0 1 1.64 2.85s-4.3 7.39 3.12 10.17a4.5 4.5 0 0 1-2.05-.57c-.05 2.28 1.58 4.41 3.95 4.89a4.52 4.52 0 0 1-2.04.08 4.48 4.48 0 0 0 4.19 3.11A9 9 0 0 1 1 19.54a12.8 12.8 0 0 0 6.29 1.84c7.55 0 11.67-6.26 11.67-11.67 0-.18-.01-.35-.02-.53A8.18 8.18 0 0 0 23 3z" />
      </svg>
    ),
    href: '#',
    hoverColor: 'hover:text-blue-400',
    label: 'Twitter'
  },
  { 
    svg: (
      <svg 
        className="w-6 h-6" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M22.54 6.42a2.8 2.8 0 0 0-1.96-2c-1.72-.46-8.58-.46-8.58-.46s-6.86 0-8.58.46a2.8 2.8 0 0 0-1.96 2 29.94 29.94 0 0 0 0 11.16 2.8 2.8 0 0 0 1.96 2c1.72.46 8.58.46 8.58.46s6.86 0 8.58-.46a2.8 2.8 0 0 0 1.96-2 29.94 29.94 0 0 0 0-11.16z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
    href: '#',
    hoverColor: 'hover:text-red-400',
    label: 'YouTube'
  },
  { 
    svg: (
      <svg 
        className="w-6 h-6" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    href: '#',
    hoverColor: 'hover:text-blue-500',
    label: 'Facebook'
  }
];

export function SocialLinks() {
  return (
    <div className="flex gap-6">
      {socialLinks.map(({ svg, href, hoverColor, label }) => (
        <a 
          key={label}
          href={href} 
          className={`text-zinc-400 ${hoverColor} transition-colors transform hover:scale-110`}
          aria-label={`Follow us on ${label}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {svg}
        </a>
      ))}
      <a 
        href="#"
        className="text-zinc-400 hover:text-violet-400 transition-colors transform hover:scale-110"
        aria-label="Follow us on TikTok"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg 
          className="w-6 h-6" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      </a>
    </div>
  );
}