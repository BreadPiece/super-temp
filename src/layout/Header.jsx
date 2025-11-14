import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Header() {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href = `${BACKEND_URL}/login`;
  };

  return (
    <header className="w-full bg-white text-center py-4 shadow-sm">
      {/* Title */}
      <h1
        className="text-4xl font-bold text-blue-600 mb-2 cursor-pointer"
        onClick={() => navigate('/')}
      >
        WutsAround
      </h1>

      {/* Buttons under title */}
      <nav className="flex justify-center space-x-3">
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={() => navigate('/travel')}>Travel</Button>
        <Button onClick={() => navigate('/restaurants')}>Restaurants</Button>
        <Button variant="outline" onClick={() => navigate('/register')}>
          Register
        </Button>
      </nav>
    </header>
  );
}
