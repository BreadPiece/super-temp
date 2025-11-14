import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-900">
      {/* Header at very top */}
      <Header />

      {/* Main content fills space between header & footer */}
      <main className="flex-1 flex flex-col items-center justify-start p-8">
        {children}
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}
