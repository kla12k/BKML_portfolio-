import React from 'react';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Brands } from './components/Brands';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-950 to-zinc-900">
      <Hero />
     
      <Stats />
      <Services />
      <Portfolio />
      <Team />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import emailjs from 'emailjs-com';

emailjs.init("NVSxcerMjPIGLondC");
