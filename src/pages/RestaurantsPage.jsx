import React from 'react';
import Layout from '@/layout/Layout';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function RestaurantsPage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-orange-600 mb-4">
        Restaurants Near You
      </h1>
      <p className="text-gray-600 max-w-lg mb-8">
        Discover and review the best dining spots nearby. We’ll help you find
        your next favorite meal!
      </p>
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </Layout>
  );
}
