import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutWrapper from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <div className="relative z-0 bg-primary">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutWrapper />} />
          {/* Autres routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
