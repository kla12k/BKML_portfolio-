import React from 'react';

interface StatCardProps {
  number: string;
  text: string;
}

export function StatCard({ number, text }: StatCardProps) {
  return (
    <div className="text-center p-8 bg-zinc-900 rounded-xl">
      <p className="text-4xl font-bold text-white mb-2">{number}</p>
      <p className="text-zinc-400">{text}</p>
    </div>
  );
}