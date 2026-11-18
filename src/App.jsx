
import React, { useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import MusicButton from './components/MusicButton';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

import { Routes, Route, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

  // useEffect(() => {
  //   const loader = document.getElementById('monikanchan-preloader');

  //   if (!loader) {
  //     console.warn('Monikanchan preloader was not found.');
  //     return;
  //   }

  //   // Wait at least 1.5 seconds before hiding the loader.
  //   const timer = setTimeout(() => {
  //     loader.classList.add('is-hidden');

  //     // Remove loader after fade-out animation.
  //     const removeTimer = setTimeout(() => {
  //       loader.remove();
  //     }, 700);

  //     // Keep cleanup available if the component unmounts.
  //     cleanupRemoveTimer = removeTimer;
  //   }, 1500);

  //   let cleanupRemoveTimer;

  //   return () => {
  //     clearTimeout(timer);
  //     clearTimeout(cleanupRemoveTimer);
  //   };
  // }, []);

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Public Website */}
        <Route path="/" element={<Hero />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Panel */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

      {!isAdminRoute && (
        <>
          <Footer />
          <MusicButton />
        </>
      )}
    </>
  );
};

export default App;
