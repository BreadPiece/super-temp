import React from 'react';
import Layout from '@/layout/Layout';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    window.location.href = `${BACKEND_URL}/register`;
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Create an Account
      </h1>
      <p className="text-gray-600 max-w-lg mb-8">
        Sign up for WutsAround to personalize your travel and restaurant
        experiences.
      </p>
      <Button size="lg" onClick={handleRegister}>
        Go to Registration
      </Button>
      <Button variant="outline" className="mt-4" onClick={() => navigate('/')}>
        Back to Home
      </Button>
    </Layout>
  );
}
