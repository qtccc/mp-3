import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/global.css'; // For global styles
import './css/main.css';   // Main section styles

import Home from './pages/Home';
import Education from './pages/Education';
import Employment from './pages/Employment';
import References from './pages/Reference';
import Project from './pages/Project';
import Extracurricular from './pages/Extracurricular';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/references" element={<References />} />
        <Route path="/project" element={<Project />} />
        <Route path="/extracurricular" element={<Extracurricular />} />
      </Routes>
    </Router>
  );
}

export default App;