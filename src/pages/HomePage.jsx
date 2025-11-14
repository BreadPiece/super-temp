import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Layout from '@/layout/Layout';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold text-gray-800 mb-4 mt-12"
      >
        Discover Wuts Around You
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-600 max-w-2xl mb-8 text-center"
      >
        WutsAround helps you explore nearby travel destinations, book trips, and
        find the best restaurants around. Start your journey today!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mb-8"
      >
        <Button size="lg" onClick={() => navigate('/travel')}>
          Start Exploring
        </Button>
      </motion.div>
    </Layout>
  );
}