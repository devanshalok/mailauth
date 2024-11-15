import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import AOS from 'aos';

// Initialize AOS
AOS.init({
  duration: 1000,
});

ReactDOM.render(<App />, document.getElementById('root'));
