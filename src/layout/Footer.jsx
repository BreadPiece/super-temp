import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-50 text-gray-500 text-center py-4">
      © {new Date().getFullYear()} WutsAround. All rights reserved.
    </footer>
  );
}
