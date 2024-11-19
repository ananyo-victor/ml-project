import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ChoosePage from './ChoosePage';
import ImagePage from './ImagePage';
import Navbar from './Navbar';
import Footer from './Footer';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

function App() {
  return (
    <Router>
      <div className='relative'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/choose" element={<ChoosePage />} />
        <Route path="/image-detection" element={<ImagePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Future page for Voice Detection */}
        <Route
          path="/voice-detection"
          element={<h1 className="text-center mt-20">Voice Detection Coming Soon!</h1>}
        />
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
