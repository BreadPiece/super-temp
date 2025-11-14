import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Header */}
      <Header />

      {/* Main content expands to fill space */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-8 flex flex-col items-center justify-center">
        {children}
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}
