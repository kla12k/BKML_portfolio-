import React from 'react';

// Importing images
import Biruk from '../assets/images/br.png';
import Mely from '../assets/images/mlk.png';

interface TeamMember {
  name: string;
  image: string;
  instagram: string;
  tiktok: string;
  facebook: string;
}

export function Team() {
  const team: TeamMember[] = [
    {
      name: "Biruk Samuael",
      image: Biruk,  
      instagram: "https://www.instagram.com/biruk_samuael?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      tiktok: "https://www.tiktok.com/@biruk_sami?is_from_webapp=1&sender_device=pc",
      facebook: "https://www.facebook.com/share/17ziyQVUhm/",
    },
    {
      name: "Melaku Gizaw",
      image: Mely,  
      instagram: "https://www.instagram.com/melaku_gw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
      tiktok: "https://www.tiktok.com/@melaku_gw?is_from_webapp=1&sender_device=pc",
      facebook: "https://www.facebook.com/share/13qgDKPHuF/",
    }
  ];

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Meet the Creators</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A diverse team of creative professionals pushing the boundaries of digital content.
          </p>
        </div>

        {/* Center the grid items when only two members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          {team.map((member) => (
            <div key={member.name} className="group relative">
              <div className="aspect-square overflow-hidden rounded-xl mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <div className="flex justify-center gap-4">
                  <a href={member.instagram}  target="_blank" className="text-zinc-400 hover:text-pink-400 transition-colors">
                    {InstagramIcon()}
                  </a>
                  <a href={member.tiktok}  target="_blank" className="text-zinc-400 hover:text-blue-400 transition-colors">
                    {TikTokIcon()}
                  </a>
                  <a href={member.facebook}  target="_blank" className="text-zinc-400 hover:text-blue-600 transition-colors">
                    {FacebookIcon()}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Custom SVG icon for Instagram
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37a4 4 0 11-4.63-4.63 4 4 0 014.63 4.63z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 6.5h.01" />
  </svg>
);

// Custom SVG icon for TikTok
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path fill="#fff" d="M12 2v7.7a3.45 3.45 0 1 1-1.73-3.01v2.5a.95.95 0 1 0 .94.94V2h2.37a4.36 4.36 0 0 0 3.4 3.4v2.38A6.75 6.75 0 0 1 13.69 8V13.23A4.95 4.95 0 0 1 7.5 18.19 4.75 4.75 0 1 1 10.3 10.06v1.63a3.05 3.05 0 1 0 .95 2.23v-8h.94Z"/>
  </svg>
);

// Custom SVG icon for Facebook
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.08h3.129V8.414c0-3.1 1.892-4.787 4.655-4.787 1.324 0 2.462.099 2.793.143v3.239l-1.916.001c-1.504 0-1.794.714-1.794 1.76v2.308h3.587l-.467 3.626h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"/>
  </svg>
);
