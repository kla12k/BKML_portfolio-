import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      text: "Their creative team transformed our brand's social media presence. The engagement rates are through the roof!",
      author: "Jessica Lee",
      role: "Marketing Director, TechCorp"
    },
    {
      text: "The most innovative content creators we've worked with. They understand viral trends and know how to adapt them.",
      author: "Michael Scott",
      role: "CEO, Startup Inc"
    },
    {
      text: "From TikTok to Instagram, they deliver consistently amazing content that resonates with our audience.",
      author: "David Chen",
      role: "Social Media Manager, FashionBrand"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-violet-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">Client Love</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-violet-400 text-violet-400" />
                ))}
              </div>
              <p className="text-zinc-300 mb-6">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-zinc-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}