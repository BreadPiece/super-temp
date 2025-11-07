import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TravelPage from './pages/TravelPage';
import RestaurantsPage from './pages/RestaurantsPage';
import RegisterPage from './pages/RegisterPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}
