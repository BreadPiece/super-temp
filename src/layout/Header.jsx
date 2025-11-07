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
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1
        className="text-2xl font-bold text-blue-600 cursor-pointer"
        onClick={() => navigate('/')}
      >
        WutsAround
      </h1>
      <nav className="flex space-x-4">
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
