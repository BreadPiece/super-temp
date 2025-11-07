import React from 'react';
import Layout from '@/layout/Layout';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function TravelPage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Travel Booking</h1>
      <p className="text-gray-600 max-w-lg mb-8">
        Find exciting destinations, book your trips, and manage your travel
        plans easily.
      </p>
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </Layout>
  );
}
