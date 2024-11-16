import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainForm from './components/MainForm';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="mt-4">
          <Routes>
            <Route path="/" element={<MainForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
