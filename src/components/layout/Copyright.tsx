import React from 'react';

export function Copyright() {
  return (
    <p className="text-zinc-500 text-sm">
      © {new Date().getFullYear()} Developed By KB. All rights reserved.
    </p>
  );
}