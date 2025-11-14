import React from 'react';

export default function Footer() {
  return (
   <footer className="mt-auto bg-blue-50 text-gray-500 text-center py-4 border-t border-gray-200">
  © {new Date().getFullYear()} WutsAround. All rights reserved.
</footer>

  );
}
