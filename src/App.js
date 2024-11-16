import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import MainForm from './components/MainForm';
import About from './components/About';
import MyDB from './components/MyDB';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="mt-4">
          <Routes>
            <Route path="/" element={<MainForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/mydb" element={<MyDB />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
